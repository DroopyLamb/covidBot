let btnVoice = document.getElementById('voice');
let texto = document.getElementById('pregunta');


// Permite grabar voz
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-MX';
recognition.continuos = true; // Grabe contínuamente
recognition.interimResults = false; //Devuelve los resultados cuando pasa un tiempo de silencio

// Resultado
recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
    console.log(results);
}

// El micrófono deja de escuchar
recognition.onend = (event) => {
    console.log('El micrófono ha dejado de escuchar');
}

btnVoice.onmousedown = () => {
    recognition.start(); //Empieza a escuchar la voz
}

btnVoice.onmouseup = () => {
    recognition.stop(); // Deja de escuchar
}