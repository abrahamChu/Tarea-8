window.onload = function() {

    //Inicializamos las variables que vamos a utilizar
    let palabra = document.getElementById("dato");
    let cajas = document.querySelectorAll("#texto div");
    let textoFinal;
    let palabraA;

    //Funcion que hace que al pulsar la tecla Enter es cuando se ejecuta la funcion marcar()
    palabra.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) { 
            marcar();
        }
    });

    //Funcion que nos marca con rojo el texto que hayamos introducido.
    function marcar(){
        //Le pasamos el valor a la variable palabraA
        palabraA=palabra.value;
        palabra.value="";
        //Utilizamos un for para recorrer todo el largo del texto uno a uno.
        for (let i=0; i<cajas.length; i++){
            textoFinal=cajas[i].innerHTML;//Texto final recoge uno a uno las letras o palabras que hayamos seleccionado previamente
            textoFinal=textoFinal.replaceAll(palabraA, "<b style= color:red>"+palabraA+"</b>");//Reemplazamos las letras o palabras con las mismas pero en esta ocasion de color rojo y en negrita.
            cajas[i].innerHTML=textoFinal;//Volvemos a pasarlo para que se muestre en pantalla.
        }
    }
}