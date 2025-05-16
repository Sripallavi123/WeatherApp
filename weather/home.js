document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.querySelector('.welcome-text');
    const text = welcomeText.textContent;
    welcomeText.textContent = '';
    
    // Split text into letters
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.animation = `letterFadeIn 0.5s ease forwards ${index * 0.1}s`;
        welcomeText.appendChild(span);
    });
});