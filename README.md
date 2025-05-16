# Weather App

A simple, responsive web application for checking real-time weather data for any city, built with HTML, CSS, and JavaScript. The app uses the OpenWeatherMap API to fetch weather information, including temperature, weather description, humidity, and wind speed, and features a clean, sea-themed design.

## Overview

The Weather App allows users to search for weather conditions by city name (e.g., Guntur). It displays key weather details in a user-friendly interface, with a responsive layout suitable for both desktop and mobile devices. The app integrates a sea-themed background and modern styling for an engaging experience.

## Features

- **Real-Time Weather Data**: Fetches current weather using the OpenWeatherMap API.
- **City Search**: Search weather for any city by name.
- **Weather Details**: Displays temperature (°C), weather description, humidity, and wind speed.
- **Responsive Design**: Adapts to mobile and desktop screens.
- **Modern Styling**: Sea-themed background with smooth animations and a clean UI.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: [OpenWeatherMap](https://openweathermap.org/)
- **Fonts**: Poppins (Google Fonts)
- **Icons**: Font Awesome
- **Hosting**: Static files, served via local server

## File Structure

```
weather-app/
├── index.html      # Main HTML file
├── styles.css      # Styling for the app
├── script.js       # Logic for API calls and UI updates
```

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Get an OpenWeatherMap API Key**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) and obtain a free API key.
   - In `script.js`, replace `YOUR_API_KEY` with your API key:
     ```javascript
     const apiKey = 'YOUR_API_KEY';
     ```

3. **Run the App**:
   - Start a local server:
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000/index.html` in a web browser.

## Usage

1. **Search for Weather**:
   - Enter a city name (e.g., Guntur) in the search bar and press Enter or click the search button.
   - View weather details: temperature (°C), description (e.g., Sunny), humidity, and wind speed.

2. **Responsive Design**:
   - Access the app on mobile or desktop; the layout adjusts automatically.

3. **Error Handling**:
   - Invalid city names trigger an alert.
   - No internet connection falls back to a gradient background.

## Screenshots

*Coming soon!*

## Troubleshooting

- **Weather Data Not Loading**:
  - Verify your API key in `script.js`.
  - Check internet connectivity.
  - Ensure correct city name spelling.
- **Background Not Displaying**:
  - Test the Unsplash URL: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e`.
  - Check browser console for errors (Inspect > Console).
  - Clear cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac).
  - Confirm `styles.css` includes:
    ```css
    body.default {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') no-repeat center center fixed,
                    linear-gradient(135deg, #4361ee, #3a0ca3) !important;
        background-size: cover;
    }
    ```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API.
- [Unsplash](https://unsplash.com/) for the sea-themed background.
- Built with inspiration from Guntur’s vibrant spirit!

---

**Weather App | May 2025**
