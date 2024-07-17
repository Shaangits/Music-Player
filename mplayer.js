const songs = [
    { src: 'stay.mp3', poster: 'stay.png' },
    { src: 'Rather Be.mp3', poster: 'ratherbe.jpg' },
    { src: 'summer.mp3', poster: 'summer.jpg' }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const poster = document.getElementById('poster');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function loadSong(index) {
    audio.src = songs[index].src;
    poster.src = songs[index].poster;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.textContent = 'Pause';
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.textContent = 'Pause';
}

playButton.addEventListener('click', playPause);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

// Load the first song on page load
loadSong(currentSongIndex);
