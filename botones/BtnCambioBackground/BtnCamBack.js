var botonCambiaBackground = document.getElementById('btn_CambioBackground');
contador = 0
function cambio(){
    if(contador == 0){
        document.body.style.backgroundImage= "URL(./botones/BtnCambioBackground/plano.gif)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        contador = 1
        console.log("funciona el ponidor de color");
    }
    else{
        document.body.style.backgroundImage = "none";
        contador = 0
        console.log("desponimos el color");
    }
};
