const sigilCursor = document.getElementById('cursorSigil'); 

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    sigilCursor.style.left = x + 'px';
    sigilCursor.style.top = y + 'px';
});

console.log("Mouse moved");

window.addEventListener('scroll', () => {
    const scrollFades = document.querySelectorAll('.scroll-fade');

    scrollFades.forEach((fadeElement) => {
        const rect = fadeElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            fadeElement.classList.add('active');
        }
    });
});
