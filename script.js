// Initialize ScrollReveal animations
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.reveal', {
        duration: 1000,
        distance: '30px',
        easing: 'ease-out',
        reset: true,
        origin: 'bottom',
    });

    console.log('Cybersecurity Portfolio Loaded!');
});

// Matrix Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Clear the canvas with a translucent black
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0"; // Matrix green
    ctx.font = `${fontSize}px monospace`;

    // Loop through drops to draw the characters
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to the top if it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Start the animation
setInterval(drawMatrix, 33);
// Smooth scrolling for anchor links