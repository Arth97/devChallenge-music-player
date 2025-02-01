// script.js

const songs = [
  {
    title: "Lost in the City Lights",
    author: "Cosmo Sheldrake",
    src: "./audio/lost-in-city-lights.mp3",
    img: "./images/cover-1.jpg",
  },
  {
    title: "Forest Lullaby2",
    author: "Lesfm",
    src: "./audio/forest-lullaby.mp3",
    img: "./images/cover-2.jpg",
  },
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);

document.getElementById("playButton").addEventListener("click", playPause);
document.getElementById("prevButton").addEventListener("click", prevSong);
document.getElementById("nextButton").addEventListener("click", nextSong);
// audio.addEventListener("timeupdate", updateProgressBar);

function prevSong() {
  // Add previous button implementation
}

function playPause() {
  audio.play()
}

function nextSong() {
  // Add next button implementation
}

function loadSong(index) {
  const song = songs[index];
  console.log("song", song)
  document.getElementById("coverId").src = song.img;
  document.getElementById("songName").textContent = song.title;
  document.getElementById("authorName").textContent = song.author;
  audio.src = song.src;
  audio.load();
  playPause();
}

function updateProgressBar() {
  // Handle when progress bar is updated
}

// document.getElementById("progressBar").addEventListener("input", function () {
//   audio.currentTime = (this.value / 100) * audio.duration;
// });

// Initial load
loadSong(currentSongIndex);