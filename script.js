// Select elements
const birthdayPhoto = document.getElementById('birthday-photo');
const balloonLeft = document.getElementById('balloon-left');
const balloonRight = document.getElementById('balloon-right');
const confettiContainer = document.getElementById('confetti-container');

// Toggle enlargement and rotation on the birthday photo when clicked
birthdayPhoto.addEventListener('click', () => {
    birthdayPhoto.classList.toggle('enlarged');
});

// Show confetti when either balloon is clicked
balloonLeft.addEventListener('click', () => {
    showConfetti();
});

balloonRight.addEventListener('click', () => {
    showConfetti();
});

// Function to create confetti effect
function showConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = randomColor();
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000); // Remove confetti after it falls
    }
}

// Function to get random color for confetti
function randomColor() {
    const colors = ['#FF6347', '#FFD700', '#00FF7F', '#1E90FF', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
}
