document.getElementById("btn_Gravity").addEventListener("click", function(){
    this.classList.add("caida");
    setTimeout(() => {
        this.classList.remove("caida");
    }, 5000);
});