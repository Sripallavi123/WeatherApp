document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with animate-slide-in
    const elements = document.querySelectorAll('.animate-slide-in');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Animate icons
    const icons = document.querySelectorAll('.fa');
    icons.forEach(icon => {
        icon.style.transform = 'scale(0.8)';
        setTimeout(() => {
            icon.style.transition = 'transform 0.3s ease';
            icon.style.transform = 'scale(1)';
        }, 500);
    });
});