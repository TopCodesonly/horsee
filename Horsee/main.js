const horseImages = [
    'horse1.jpg',
    'horse2.jpeg',
    'horse3.jpg',
    'horse4.jpg',
    'horse5.jpg'
    // Add more image URLs as needed
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayRandomHorse() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';

    shuffleArray(horseImages);

    const img = document.createElement('img');
    img.src = horseImages[0];
    container.appendChild(img);
}

// Display a random horse image on page load
window.onload = displayRandomHorse;




function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').innerText = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Display the initial time on page load
window.onload = updateTime;
