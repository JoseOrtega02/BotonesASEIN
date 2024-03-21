var botonCambioCursor = document.getElementById('btn_CambioCursor');
contador = 0

function MagicMouse(){
    if(contador == 0){
        document.documentElement.style.cursor = 'url("./botones/BtnCambioCursor/espada.png"), auto';
        contador = 1
    }
    else{
        document.documentElement.style.cursor = 'auto'
        contador = 0
    }
}