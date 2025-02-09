// script.js

const songs = [
  {
    title: "Lost in the City Lights",
    author: "Cosmo Sheldrake",
    src: "./audio/lost-in-city-lights.mp3",
    img: "./images/cover-1.jpg",
  },
  {
    title: "Forest Lullaby",
    author: "Lesfm",
    src: "./audio/forest-lullaby.mp3",
    img: "./images/cover-2.jpg",
  },
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);
console.log("audio", audio);


audio.addEventListener("timeupdate", updateProgressBar);

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function playPause() {
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");

  if (audio.paused) {
      audio.play();
      playButton.style.display = "none";
      pauseButton.style.display = "flex";
  } else {
      audio.pause();
      playButton.style.display = "flex";
      pauseButton.style.display = "none";
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  audio.load();
  document.getElementById("coverId").src = song.img;
  document.getElementById("songName").textContent = song.title;
  document.getElementById("authorName").textContent = song.author;
  // playPause();
}

function updateProgressBar() {
  const currentTime = document.getElementById("currentTime");
  const duration = document.getElementById("duration");
  const progressBar = document.getElementById("progressBarId");
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


// Initial load
loadSong(currentSongIndex);