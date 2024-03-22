const btnImposible = document.getElementById("btn__imposible");
function moveBTN(e) {
  let x = Math.random(0, 0.5) * window.innerWidth;
  let y = Math.random(0, 0.5) * window.innerHeight;

  btnImposible.style.position = "absolute";

  btnImposible.style.left = x + "px";
  btnImposible.style.top = y + "px";
}
