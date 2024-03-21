let num = 0;
let colores = ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#000000"] 
var fondo = document.getElementById("fondo")

function cambiaFondo() {
	num++;
	fondo.style.backgroundColor = colores[num % 5]; 
}

window.onload = function posicionAleatoria() {
var elemento = document.getElementById("elemento");
let top = Math.floor(Math.random() * (75 - 5)) + 5;
let left = Math.floor(Math.random() * (95 - 5)) + 5;
    while ((top > 20 && top < 50) && (left > 30 && left < 70)){
        top = Math.floor(Math.random() * (75 - 5)) + 5;
        left = Math.floor(Math.random() * (95 - 5)) + 5;
}
    elemento.style.top = top + "vh";
    elemento.style.left = left + "vw";
}

let x = 40;
		let y = 40;
		let intervalo;

		var buscador = document.getElementById("buscador");
		var arriba = document.getElementById("up");
		var abajo  = document.getElementById("down");
		var izquierda = document.getElementById("left");
		var derecha = document.getElementById("right");

		arriba.addEventListener('mousedown', function() {
		  intervalo = setInterval(subir, 10); // Cada 100 milisegundos
		});

		abajo.addEventListener('mousedown', function() {
		  intervalo = setInterval(bajar, 10); // Cada 100 milisegundos
		});

		izquierda.addEventListener('mousedown', function() {
		  intervalo = setInterval(mover_izquierda, 10); // Cada 100 milisegundos
		});

		derecha.addEventListener('mousedown', function() {
		  intervalo = setInterval(mover_derecha, 10); // Cada 100 milisegundos
		});

		function parar(){
			clearInterval(intervalo);
		}

		function subir() {
			if (y > 0){
				y--;
				buscador.style.top = y + "vh";
			}
		}
		function bajar() {
			if (y < 60){
				y++;
				buscador.style.top = y + "vh";
			}
		}
		function mover_izquierda() {
			if (x > 0){
				x--;
				buscador.style.left = x + "vw";
			}
		}
		function mover_derecha() {
			if (x < 80){
				x++;
				buscador.style.left = x + "vw";
			}
		}