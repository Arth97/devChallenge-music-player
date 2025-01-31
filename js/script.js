// script.js

const songs = [
  {
    title: "Song 1",
    author: "Artist 1",
    src: "song1.mp3",
    img: "cover1.jpg",
  },
  {
    title: "Song 2",
    author: "Artist 2",
    src: "song2.mp3",
    img: "cover2.jpg",
  },
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);

document.getElementById("playButton").addEventListener("click", playPause);
document.getElementById("nextButton").addEventListener("click", nextSong);
document.getElementById("prevButton").addEventListener("click", prevSong);
audio.addEventListener("timeupdate", updateProgressBar);

function playPause() {
  // Add pause button implementation
}

function nextSong() {
  // Add next button implementation
}

function prevSong() {
  // Add previous button implementation
}

function loadSong(index) {
  const song = songs[index];
  document.getElementById("songName").textContent = song.title;
  document.getElementById("authorName").textContent = song.author;
  audio.src = song.src;
  audio.load();
}

function updateProgressBar() {
  // Handle when progress bar is updated
}

document.getElementById("progressBar").addEventListener("input", function () {
  audio.currentTime = (this.value / 100) * audio.duration;
});

// Initial load
loadSong(currentSongIndex);