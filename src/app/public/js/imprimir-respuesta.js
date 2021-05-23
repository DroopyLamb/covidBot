// Función que mostrará la respuesta, dependiendo el código
function mostrarRespuesta(response, cod) {

    // cod 1 responde con una etiqueta <p></p>
    if (cod == 1) {
        let caja = document.createElement('p');
        let contenido = document.createTextNode(response);
        caja.appendChild(contenido);
        caja.setAttribute('class', 'response');
        let contenedor = document.getElementById('respuestas');
        contenedor.appendChild(caja);

    } else if (cod == 2) { // cod 2 responde con una etiqueta <a></a>
        let caja = document.createElement('p');
        let contenido = document.createTextNode(response);
        caja.appendChild(contenido);
        caja.setAttribute('class', 'response');
        let contenedor = document.getElementById('respuestas');
        contenedor.appendChild(caja);


        let url = 'http://localhost:3000/preguntas';
        let caja2 = document.createElement('a');
        let contenido2 = document.createTextNode('Rellenar formulario');
        caja2.appendChild(contenido2);
        caja2.setAttribute('class', 'response');
        caja2.setAttribute('href', url);
        caja2.setAttribute('target', '_blank');
        let contenedor2 = document.getElementById('respuestas');
        contenedor2.appendChild(caja2);
    }

}