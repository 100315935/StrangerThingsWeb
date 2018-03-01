export class Main {

   
}

function pasarNoticia(){
    console.log("Entra en funcion")
    var x = document.getElementById("noticias1");
    var y =document.getElementById("noticias2");
if (x.style.display === "none") {
x.style.display = "block";
y.style.display = "none";
} else {
x.style.display = "none";
y.style.display = "block"
}
}
