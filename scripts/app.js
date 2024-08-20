
function obtenerMensajeEncriptar(){

    //Obtiene el mensaje del usuario.
    let mensaje = document.getElementById('textoUsuario').value;
        
    //Oculta el flayer derecho para mostrar el boton de copiar y el resultado.
    var flayerDerecho = document.getElementById('flayer__derecho');
    flayerDerecho.style.display = "none"; 
    
    //Muestra el boton "copiar", hace la encriptación y muestra el resultado en la etiqueta <P>
    let divResultados = document.getElementById('resultado');
    divResultados.style.display="flex";
    let parrafoEncripatdo = document.getElementById('parrafo__resultado');
    parrafoEncripatdo.innerHTML = encriptarMensajeManual(mensaje);
    
    
}

function obtenerMensajeDesencriptar(){

    //Obtiene mensaje del usuario.
    let mensaje = document.getElementById('textoUsuario').value;
    
    //
    let parrafoEncripatdo = document.getElementById('parrafo__resultado');
    parrafoEncripatdo.innerHTML = desencriptarMensajeManual(mensaje);


    console.log(desencriptarMensajeManual(mensaje));
    
    
}

//encriptar con expresión regular, no está en uso.
function encriptar(mensaje) {
    const clave = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };    
    
    // Utilizar una expresión regular para buscar las vocales y reemplazarlas
    return mensaje.replace(/[aeiou]/g, function(match) {
        return clave[match];
    });
}

//Desencripatr con "expresiones regulares", no está en uso, se opto por la desencriptación manual por ser más didactica. 
function desencripatar (mensajeEncriptado){
    const clave = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    const regex = new RegExp(Object.keys(clave).join('|'), 'g');
    return mensajeEncriptado.replace(regex, function(match) {
        return clave[match];
    });

    
}

//Encripatr manualmente.
function encriptarMensajeManual(cadena) {
    
    
    // Definir un objeto que mapea las cadenas de reemplazo a sus vocales originales
    const reemplazosInversos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    // Convertir la cadena en un array de caracteres
    let resultado = '';
    let i = 0;
    
    while (i < cadena.length) {
        // Revisar las posibles coincidencias y reemplazar
        if (cadena.substring(i, i + 1) === 'a') {
            resultado += 'ai';
            i += 1;
        } else if (cadena.substring(i, i + 1) === 'e') {
            resultado += 'enter';
            i += 1;
        } else if (cadena.substring(i, i + 1) === 'i') {
            resultado += 'imes';
            i += 1;
        } else if (cadena.substring(i, i + 1) === 'o') {
            resultado += 'ober';
            i += 1;
        } else if (cadena.substring(i, i + 1) === 'u') {
            resultado += 'ufat';
            i += 1;
        } else {
            resultado += cadena[i];
            i++;
        }
    }
    //habilitar boton de desencriptar
    document.getElementById('desencriptar').removeAttribute('disabled');
    return resultado;
    
}

//Desencripatr manualmente.
function desencriptarMensajeManual(cadena) {

    // Definir un objeto que mapea las cadenas de reemplazo a sus vocales originales
    const reemplazosInversos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    
    // Convertir la cadena en un array de caracteres
    let resultado = '';
    let i = 0;
    
    while (i < cadena.length) {
        // Revisar las posibles coincidencias y reemplazar
        if (cadena.substring(i, i + 2) === 'ai') {
            resultado += 'a';
            i += 2;
        } else if (cadena.substring(i, i + 5) === 'enter') {
            resultado += 'e';
            i += 5;
        } else if (cadena.substring(i, i + 4) === 'imes') {
            resultado += 'i';
            i += 4;
        } else if (cadena.substring(i, i + 4) === 'ober') {
            resultado += 'o';
            i += 4;
        } else if (cadena.substring(i, i + 4) === 'ufat') {
            resultado += 'u';
            i += 4;
        } else {
            resultado += cadena[i];
            i++;
        }
    }
    
    return resultado;
}


function copiarTexto(){
    var texto = document.getElementById("parrafo__resultado").innerText;
    navigator.clipboard.writeText(texto);
}


//muestra mensaje cuando se ingresan caracteres no permitidos
/*
function validarInput() {
    var input = document.getElementById('textoUsuario');
    var mensajeError = document.getElementById("mensajeError");
    
    // Expresión regular que solo permite letras minúsculas sin acentos
    var regex = /^[a-z]+$/;

    // Validar el valor del input
    if (regex.test(input.value)) {
        mensajeError.style.display = "none"; // Ocultar mensaje de error
        input.style.borderColor = ""; // Quitar color de borde rojo
    } else {
        mensajeError.style.display = "block"; // Mostrar mensaje de error
        input.style.borderColor = "red"; // Poner borde rojo al input
    }
}
*/

document.getElementById("textoUsuario").addEventListener("keypress", function(event) {
    var regex = /^[a-z\s!?\[\]\(\)]*$/;
    var key = String.fromCharCode(event.keyCode);
    var mensajeError = document.getElementById("mensajeError");

    // Si la tecla presionada no es válida, previene su inserción en el input
    if (!regex.test(key)) {
        event.preventDefault();
        mensajeError.style.display = "block";
    }else{
        mensajeError.style.display = "none";
    }
});