function main (){
    document.getElementById("Nombre").focus();
    document.getElementById('form_1').addEventListener("submit",recogeDatos)
}

function escribeDatos(oDatos) {
    var oLista = document.getElementById("parrafo_1"); // referencia del párrafo donde escribir
    if (Modernizr.input.required) {
        // sólo en HTML5
        //ocultar formulario (incompatible con IE8)
        document.getElementById("form_1").classList.add("oculto")
        //mostrar bloque div para el resultado (incompatible con IE8)
        document.getElementById("resultado").classList.remove("oculto");
        // limpiar el nodo <ul> donde se presentarán los datos
        oLista.innerHTML = "";
        //incorporamos a la lista cada elemento del objeto ()error de ejecucion en IE8		
        for (var i in oDatos) {
            var x = "<li>" + i + ": <strong>" +
                oDatos[i] + "</strong></li>";
            oLista.innerHTML += x;
        };
    }
    return false;
}
function recogeDatos(oEvent) {
    oEvent.preventDefault();    
    // Si las validaciones son correctas se continua la lectura de los datos
    var oDatos = {};
    var inputs = document.querySelectorAll("input[type='text']")
    for (var i = 0; i < inputs.length; i++) {
        oDatos[inputs[i].name] = inputs[i].value;
    }
    oDatos.Comentarios = document.getElementById("Comentarios").value;
    oDatos.Correo = document.getElementById("Correo").value;
    //radiobuttons
    var aJoomla = document.getElementsByName("pregunta");
    oDatos["¿Quieres recibir noticias de otras series?"] = "";
    for (var i = 0; i < aJoomla.length; i++) {
        if (aJoomla[i].checked) {
            oDatos["¿Quieres recibir noticias de otras series?"] = aJoomla[i].value.toUpperCase();
        }
    }
    //checkbox
    oDatos["Condiciones leidas"] = (document.getElementById("condiciones").checked) ? "SI" : "NO";
    //select options
    var nSelect = document.getElementById("opciones").selectedIndex;
    var sOpcion = document.getElementById("opciones").options[nSelect];
    oDatos["Quiero recibir noticias de:"] = sOpcion.text;
    //llamada a la función que procesara el arry presentandolo en pantalla
    return escribeDatos(oDatos);
}

if(document.addEventListener){
    document.addEventListener("DOMContentLoaded",main,false);
}else{
    window.onload(main)
}