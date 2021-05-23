let send = document.getElementById('enviar');

// Captura la pregunta
send.addEventListener('click', function() {
    let userMessage = document.getElementById('pregunta').value.trim();
    userMessage = userMessage.trim();
    document.getElementById('pregunta').value = "";

    // revisa que el usuario no haya enviado un campo vacío
    // si lo que envió no está vacío, creará una etiqueta P para 
    // Mandar el texto que escribió
    if (userMessage != "") {
        let message = document.createElement('p');
        let contenido = document.createTextNode(userMessage);
        message.appendChild(contenido);
        message.setAttribute('class', 'covidBot');
        let contenedor = document.getElementById('respuestas');
        contenedor.appendChild(message);

        upperCase(userMessage);
    }
});

// Cambia a mayúsculas lo que el usuario escribió
function upperCase(userMessage) {
    let mensajeUsuario = userMessage.toUpperCase();
    evaluarUsuario(mensajeUsuario);
    /* evaluarUsuario2(mensajeUsuario); */
}