document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    if (header) {
        setTimeout(() => {
            header.style.transition = 'opacity 0.8s ease-in-out';
            header.style.opacity = '1';
        }, 50);
    }
});
