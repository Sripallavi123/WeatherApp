document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    const weatherDisplay = document.getElementById('weather-display');
    const cityName = document.getElementById('city-name');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feels-like');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    // API Key (Replace with your valid OpenWeatherMap API key)
    const API_KEY = '15c7b1d7c4c743c41dcdcde75864236e';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    let lastSearchedCity = null; // Store last searched city
    let lastRefreshTime = 0; // Track last refresh time for throttling
    const REFRESH_INTERVAL = 5000; // 5 seconds (minimum interval for manual refresh)
    const AUTO_REFRESH_INTERVAL = 900000; // 15 minutes (900,000 ms)

    // Event Listener for Search Button
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            showError('Please enter a city name');
        }
    });

    // Event Listener for Enter Key
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeather(city);
            } else {
                showError('Please enter a city name');
            }
        }
    });

    // Event Listener for Refresh Button
    refreshBtn.addEventListener('click', () => {
        const now = Date.now();
        if (lastSearchedCity && (now - lastRefreshTime >= REFRESH_INTERVAL)) {
            console.log(`Refreshing weather for ${lastSearchedCity}`);
            fetchWeather(lastSearchedCity);
            lastRefreshTime = now;
            // Add confetti for fun
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else if (!lastSearchedCity) {
            showError('Please search a city first');
        } else {
            console.log(`Refresh throttled: Wait ${REFRESH_INTERVAL / 1000} seconds`);
        }
    });

    // Auto-refresh last searched city every 15 minutes
    setInterval(() => {
        if (lastSearchedCity) {
            console.log(`Auto-refreshing weather for ${lastSearchedCity}`);
            fetchWeather(lastSearchedCity);
        }
    }, AUTO_REFRESH_INTERVAL);

    // Fetch Weather Data for Searched City
    async function fetchWeather(city) {
        try {
            showLoading();
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            console.log(`Search ${city}: Status ${response.status} ${response.statusText}`);
            
            if (!response.ok) {
                const errorData = await response.json();
                console.log(`Error Details for ${city}:`, errorData);
                if (response.status === 401) {
                    throw new Error('Invalid API key. Please get a new key from https://openweathermap.org. It may take 10 minutes to 2 hours to activate.');
                }
                throw new Error(errorData.message || 'City not found');
            }
            
            const data = await response.json();
            console.log(`Data for ${city}:`, data);
            
            updateWeather(data);
            lastSearchedCity = city; // Store the searched city
        } catch (error) {
            console.error(`Fetch Weather Error for ${city}:`, error.message);
            showError(error.message);
        }
    }

    // Update Weather Display
    function updateWeather(data) {
        loading.classList.add('hidden');
        errorMessage.classList.add('hidden');
        weatherDisplay.classList.remove('hidden');
        weatherDisplay.classList.add('fade-in');
        
        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind: ${data.wind.speed} m/s`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
        
        const weatherMain = data.weather[0].main.toLowerCase();
        document.body.className = 'min-h-screen flex flex-col items-center justify-start transition-all duration-500 p-4';
        if (weatherMain.includes('clear')) {
            document.body.classList.add('clear');
        } else if (weatherMain.includes('cloud')) {
            document.body.classList.add('clouds');
        } else if (weatherMain.includes('rain') || weatherMain.includes('drizzle')) {
            document.body.classList.add('rain');
        } else if (weatherMain.includes('sun') || weatherMain.includes('sunny')) {
            document.body.classList.add('sunny');
        } else {
            document.body.classList.add('default');
        }
    }

    // Show Loading State
    function showLoading() {
        loading.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        weatherDisplay.classList.add('hidden');
    }

    // Show Error Message
    function showError(message) {
        loading.classList.add('hidden');
        weatherDisplay.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = message;
        document.body.className = 'min-h-screen flex flex-col items-center justify-start transition-all duration-500 default p-4';
    }
});// In script.js, after fetchWeather
localStorage.setItem('lastWeather', JSON.stringify(data));
// On page load
const cached = localStorage.getItem('lastWeather');
if (cached) updateWeather(JSON.parse(cached));