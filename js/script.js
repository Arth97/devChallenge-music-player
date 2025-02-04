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


audio.addEventListener("timeupdate", updateProgressBar);

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function playPause() {
  audio.paused ? audio.play() : audio.pause();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function loadSong(index) {
  const song = songs[index];
  console.log("song", song)
  document.getElementById("coverId").src = song.img;
  document.getElementById("songName").textContent = song.title;
  document.getElementById("authorName").textContent = song.author;
  audio.src = song.src;
  audio.load();
  // playPause();
}

function updateProgressBar() {
  const progressBar = document.getElementById("progressBarId");
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }}

document.getElementById("progressBarId").addEventListener("input", function () {
  audio.currentTime = (this.value / 100) * audio.duration;
  console.log("audio.currentTime", audio.currentTime)
});


// Initial load
loadSong(currentSongIndex);