var cambioLetra = document.getElementById('c2');
var contador = 0;
function cambioLetras(){
    contador +=1;
    if(contador == 3){
        contador = 0;
    }
    if(contador == 0){
        cambioLetra.style.fontFamily = "mojang";
    }
    else if(contador == 1){
        cambioLetra.style.fontFamily = "verdana";
    }
    else if (contador == 2){
        cambioLetra.style.fontFamily = "arial";
    }
    console.log(contador);
}