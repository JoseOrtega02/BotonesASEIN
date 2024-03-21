const btn = document.getElementById("btn__musicaFF7");
const audio = new Audio("./FF7.mp3");
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});