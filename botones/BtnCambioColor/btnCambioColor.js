var cambioColor = document.getElementById('c1');
var Btn_cambiocolor = document.getElementById('btn_cambioColor')
contador = 0
function cambiarColor(){
    contador +=1;
    if(contador == 3){
        contador = 0;
    }
    if(contador == 0){
        cambioColor.style.backgroundColor = "#07A27F";
    }
    else if(contador == 1){
        cambioColor.style.backgroundColor = "green";
    }
    else if (contador == 2){
        cambioColor.style.backgroundColor = "transparent";
    }
    console.log(contador);
}