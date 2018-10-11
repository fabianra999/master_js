'use strict'

// LLamado
window.addEventListener('load', () => {

    var formulario = document.querySelector('#formulario'),
        campoTexto = document.querySelectorAll('.infoTest');

    // Ocultar texto
    for (let item in campoTexto) {
        if (campoTexto[item].className == "infoTest") {
            campoTexto[item].style.display = "none";
        }
    }

    /**
     *  Event
     */
    formulario.addEventListener('submit', () => {
        console.log('Submit');

        // Inputs
        var nombre = document.querySelector('#input1'),
            apellido = document.querySelector('#input2'),
            edad = document.querySelector('#input3');

        // texs
        var nombreP = document.querySelector('#input1_p'),
            apellidoP = document.querySelector('#input2_p'),
            edadP = document.querySelector('#input3_p');

        // Pasar texto
        nombreP.innerHTML = nombre.value;
        apellidoP.innerHTML = apellido.value;
        edadP.innerHTML = edad.value;

        if (nombre.value.trim() == null || nombre.value.trim().length == 0) {
            nombre.style.background = "red";
            return false;
        } else if (apellido.value.trim() == null || apellido.value.trim().length == 0) {
            apellido.style.background = "red";
            return false;
        } else if (edad.value == null || edad.value.length == 0 || isNaN(parseInt(edad.value))) {
            edad.style.background = "red";
            return false;
        } else {
            // Mostrar texto
            for (let item in campoTexto) {

                if (campoTexto[item].className == "infoTest") {
                    campoTexto[item].style.display = "block";
                }
            }
        }


    });

});