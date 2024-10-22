document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('loading-music');
    music.volume = 0.2;  // Set initial volume (0.0 to 1.0)

    // Function to toggle play/pause
    function toggleMusic() {
        if (music.paused) {
            music.play();  // Play if paused
        } else {
            music.pause(); // Pause if playing
        }
    }

    // Event listener for spacebar press (key code 32)
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            toggleMusic();
        }
    });
});