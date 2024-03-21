var btn_Tamaño = document.getElementById('btn_CambioTamaño');
var caja3 = document.getElementById('c3');
var cambioTam = false;

function Tamaño(){
    if (cambioTam){
        // Achicar el div
        caja3.style.width = "7vw";
        caja3.style.height = "30vh";
    } else {
        // Agrandar el div
        caja3.style.width = "200px";
        caja3.style.height = "200px";
    }
    // Invertir el estado (true/false)
    cambioTam = !cambioTam;
}
