// Inicio Lógica del Bot

// Evaluar expresiones del usuario
function evaluarUsuario(mensajeUsuario) {
    // Palabra 1 = Expresión 1 --> Expresión repetitiva
    // Palabra 2 = Expresión 2 --> Expresión clave (motivo del mensaje)
    // cod = Código para evavluar la respuesta  que se le dará

    let palabra1, palabra2, palabra3, cod, test = true,
        response;

    if (mensajeUsuario.includes('HOLA') || mensajeUsuario.includes('BUENAS') || mensajeUsuario.includes('HELLO')) {
        palabra1 = RegExp('(NECESITO|QUISIERA)'); //  Lee la expresión regular
        palabra2 = /AYUDA/;

        if (mensajeUsuario.includes('HOLA') || mensajeUsuario.includes('BUENAS') || mensajeUsuario.includes('HELLO')) {
            cod = 1;
            responder(cod);
            return;
            // Evalua si las expresiones son positivas
        } else if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 4;
            responder(cod);
            return;
        }
    }
    if (mensajeUsuario.includes('TRANSMITE') || mensajeUsuario.includes('CONTAGIA') || mensajeUsuario.includes('INFECTAR') ||
        mensajeUsuario.includes('PROPAGA')) {
        palabra1 = RegExp('(TRANSMITE|TRANSMITR|CONTAGIA|CONTAGIAR|PROPAGA)');
        palabra2 = /COVID/;

        if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 2;
            responder(cod);
            return;
        }
    }

    if (mensajeUsuario.includes('SÍNTOMAS') || mensajeUsuario.includes('SINTOMATOLOGÍAS') || mensajeUsuario.includes('SINTOMAS') ||
        mensajeUsuario.includes('INDICIOS') || mensajeUsuario.includes('SABER') ||
        mensajeUsuario.includes('SINTOMATOLOGÍA')) {
        palabra1 = RegExp('(SINTOMAS|SÍNTOMAS|SINTOMATOLOGÍAS|SINTOMATOLOGIA|INDICIOS|SÉ|SE|SABER)');
        palabra2 = /COVID/;

        if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 4;
            responder(cod);
            return;
        }
    }
    if (mensajeUsuario.includes('PERSONAS') || mensajeUsuario.includes('GRUPOS')) {
        palabra1 = RegExp('(PERSONAS|GRUPOS)');
        palabra2 = /RIESGO/;

        if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 5;
            responder(cod);
            return;
        }

    }
    if (mensajeUsuario.includes('COVID') || mensajeUsuario.includes('SARS')) {
        palabra1 = RegExp('(SARS|COVID)');
        palabra2 = /ENTRE/;
        palabra3 = /MISMO/;

        if ((palabra1.test(mensajeUsuario) && palabra2.test(mensajeUsuario)) ||
            (palabra1.test(mensajeUsuario) && palabra3.test(mensajeUsuario))) {
            cod = 6;
            responder(cod);
            return;
        }
    }
    if (mensajeUsuario.includes('EFICACES') || mensajeUsuario.includes('EFICAZ')) {
        palabra1 = RegExp('(EFICACES|EFICAZ|)');
        palabra2 = /ANTIBIOTICOS/;
        palabra3 = /ANTIBIÓTICOS/;

        if ((palabra1.test(mensajeUsuario) && palabra2.test(mensajeUsuario)) ||
            (palabra1.test(mensajeUsuario) && palabra3.test(mensajeUsuario))) {
            cod = 7;
            responder(cod);
            return;
        }
    }
    if (mensajeUsuario.includes('MEDIDAS') || mensajeUsuario.includes('PROTECCIÓN') ||
        mensajeUsuario.includes('PROTECCION')) {
        palabra1 = RegExp('(MEDIDAS|PROTECCIÓN|PROTECCION)');
        palabra2 = /ENFERMEDADES RESPIRATORIAS/;

        if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 8;
            responder(cod);
            return;
        }
    }
    if (mensajeUsuario.includes('VACUNAS') || mensajeUsuario.includes('VACUNA')) {
        palabra1 = RegExp('(VACUNAS|VACUNAS)');
        palabra2 = /COVID/;
        palabra3 = /EXISTEN/;

        if ((palabra1.test(mensajeUsuario) && palabra2.test(mensajeUsuario)) ||
            (palabra1.test(mensajeUsuario) && palabra3.test(mensajeUsuario))) {
            cod = 9;
            responder(cod);
            return;
        }
    }
    if (mensajeUsuario.includes('DONAR')) {
        palabra1 = RegExp('(DONAR)');
        palabra2 = /SANGRE/;

        if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 10;
            responder(cod);
            return;
        }
    }

    if (mensajeUsuario.includes('ES') || mensajeUsuario.includes('SABES')) {
        palabra1 = RegExp('(ES|SABER)');
        palabra2 = /COVID/;

        if (testearResponse(palabra1, palabra2, mensajeUsuario)) {
            cod = 3;
            responder(cod);
            return;
        }
    } else {
        let response = `disculpa no tengo la respuesta, te invito a rellenar un formulario para que un médico especializado en temas de
        Covid-19 resuleva tus dudas: `;
        cod = 2;
        mostrarRespuesta(response, cod);
        return;
    }

}


// Evalúa las expresiones regulares dentro del mensaje general
function testearResponse(palabra1, palabra2, mensajeUsuario) {
    if (palabra1.test(mensajeUsuario) && palabra2.test(mensajeUsuario)) {
        return true;
    }
}