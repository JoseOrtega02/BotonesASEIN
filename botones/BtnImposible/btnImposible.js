const btnImposible = document.getElementById("btn__imposible");
function moveBTN(e) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  btnImposible.style.position = "absolute";
  btnImposible.style.left = x + "px";
  btnImposible.style.top = y + "px";
}
