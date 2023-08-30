function showFirstCamada(){
    document.getElementById("camada1").style.visibility = "visible";
    document.getElementById("camada2").style.visibility = "hidden";
    document.getElementById("camada3").style.visibility = "hidden";

}
function showSecondCamada(){
    document.getElementById("camada1").style.visibility = "hidden";
    document.getElementById("camada2").style.visibility = "visible";
    document.getElementById("camada3").style.visibility = "hidden";
}
function showThirdCamada(){
    document.getElementById("camada1").style.visibility = "hidden";
    document.getElementById("camada2").style.visibility = "hidden";
    document.getElementById("camada3").style.visibility = "visible";
}

function someTudo(){
    document.getElementById("camada1").style.visibility = "hidden";
    document.getElementById("camada2").style.visibility = "hidden";
    document.getElementById("camada3").style.visibility = "hidden";
}