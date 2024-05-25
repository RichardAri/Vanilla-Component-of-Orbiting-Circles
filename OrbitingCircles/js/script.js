document.addEventListener('DOMContentLoaded', () => {
    const orbit = document.getElementById('orbit');
    const largeIcons = orbit.querySelectorAll('.icon.large');
    const smallIcons = orbit.querySelectorAll('.icon.small');
    const centerX = 200; // Centro de la orbita en X
    const centerY = 200; // Centro de la orbita en Y
    const largeRadius = 205; // Radio de la orbita grande
    const smallRadius = 100; // Radio de la orbita pequeña
    let angle = 0; // Angulo inicial

    function animateIcons() {
        angle += 0.006; // Velocidad de rotacion
        const totalLargeIcons = largeIcons.length;
        const totalSmallIcons = smallIcons.length;

        largeIcons.forEach((icon, index) => {
            const iconAngle = angle + (index * (2 * Math.PI / totalLargeIcons)); // Angulo individual de cada icono
            const x = centerX + largeRadius * Math.cos(iconAngle);
            const y = centerY + largeRadius * Math.sin(iconAngle);
            icon.style.left = `${x}px`;
            icon.style.top = `${y}px`;
        });

        smallIcons.forEach((icon, index) => {
            const iconAngle = -angle + (index * (2 * Math.PI / totalSmallIcons)); // Angulo individual de cada icono
            const x = centerX + smallRadius * Math.cos(iconAngle);
            const y = centerY + smallRadius * Math.sin(iconAngle);
            icon.style.left = `${x}px`;
            icon.style.top = `${y}px`;
        });

        requestAnimationFrame(animateIcons);
    }
    animateIcons();
});