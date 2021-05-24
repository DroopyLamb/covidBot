function responder(cod, mensajeUsuario) {
    let response, url;
    switch (cod) {
        case 1: // Saludo
            response = "Hola soy covidBot y seré su asistente virtual, ¿En qué puedo ayudarle?";
            cod = 1;
            mostrarRespuesta(response, cod);
            break;

        case 2: // ¿Cómo se transmite?
            response = `La COVID-19 es una enfermedad causada por el virus SARS-CoV-2, que se propaga entre las personas principalmente cuando una persona infectada está en contacto cercano con otra persona.`;
            cod = 1;
            mostrarRespuesta(response, cod);
            response = `El virus se puede propagar a través de pequeñas partículas líquidas expulsadas por una persona infectada a través de la boca o la nariz al toser, estornudar, hablar, cantar o resoplar.`;
            mostrarRespuesta(response, cod);
            break;

        case 3: // ¿Qué es la Covid-19?
            response = "Los coronavirus son una familia de virus que circulan entre humanos y animales (gatos, camellos, murciélagos).";
            cod = 1;
            mostrarRespuesta(response, cod);
            response = `Se han descrito coronavirus que evolucionan y desarrollan la capacidad de transmitirse de animales a humanos y propagarse entre las personas. El virus es genéticamente distinto de otros coronavirus, por lo que se considera un nuevo virus.`;
            mostrarRespuesta(response, cod);
            break;

        case 4: // Síntomas
            response = "Un individuo contagiado del virus Covid 19 puede presentar los siguientes síntomas: ";
            cod = 1;
            mostrarRespuesta(response, cod);
            response = "Fiebre, Tos, Estornudo, Dolores de cabeza, Dificultades respiratorias(en los casos más graves)";
            mostrarRespuesta(response, cod);
            break;

        case 5: // Personas en riesgo
            response = "Personas de 60 años o más, mujeres embarazadas, niños menores de 5 años, quienes padecen enfermedades inmunodepresoras, crónicas, cardiacas, pulmonares, renales, hepáticas, sanguíneas, o metabólicas.";
            cod = 1;
            mostrarRespuesta(response, cod);
            break;

        case 6: // Diferencias entre COVID-19 y SARS
            response = "El COVID-19 y el SARS son diferentes";
            cod = 1;
            mostrarRespuesta(response, cod);
            response = "El genoma del virus que causa la COVID-19 y el del responsable del síndrome respiratorio agudo severo (SARS) son similares, pero no iguales. El SARS es más letal pero mucho menos infeccioso que la COVID-19.";
            mostrarRespuesta(response, cod);
            break;

        case 7: // Antibióticos contra el covid
            response = "Los antibióticos no son eficaces contra los virus como el SARS-CoV-2, solo contra las infecciones bacterianas. Por lo tanto, no se deben usar antibióticos como medio de prevención o tratamiento de la COVID-19 ante el riesgo de generación de resistencias a los mismos.";
            cod = 1;
            mostrarRespuesta(response, cod);
            break;

        case 8: // Medidas de protección
            response = `Lavarse las manos frecuentemente, en especial después de contacto directo con las personas u objetos de su entorno.`;
            cod = 1;
            mostrarRespuesta(response, cod);

            response = `Usar un desinfectante a base de alcohol.`;
            mostrarRespuesta(response, cod);

            response = `Al toser o estornudar, cubrirse la boca y la nariz con el codo flexionado o con un pañuelo desechable.`;
            mostrarRespuesta(response, cod);

            response = `Evitar la proximidad con personas infectadas o desconocidas que pudieran estarlo, manteniendo la distancia de seguridad mínima de 1.5 metros.`;
            mostrarRespuesta(response, cod);

            response = `Evitarse tocarse los ojos, la nariz y la boca, ya que las manos facilitan la transmisión.`;
            mostrarRespuesta(response, cod);

            response = `Uso de mascarilla`;
            mostrarRespuesta(response, cod);

            response = `Ante la presencia de síntomas de enfermedades respiratorias buscar atención médica.`;
            mostrarRespuesta(response, cod);
            break;

        case 9: // Vacunas
            response = `La mejor vacuna contra el COVID-19 es la primera que esté disponible para usted. No espere hasta poder aplicarse una marca específica.`;
            cod = 1;
            mostrarRespuesta(response, cod);

            response = `Pfizer-BioNTech: 2 dosis`;
            mostrarRespuesta(response, cod);

            response = `Moderna: 2 dosis`;
            mostrarRespuesta(response, cod);

            response = `Janssen de Johnson & Johnson: 2 dosis`;
            mostrarRespuesta(response, cod);
            break;

        case 10: // Donar sangre
            response = `Si está sano e interesado en donar sangre, la FDA (Food and Drug Administration) lo alienta a ponerse en contacto con un centro local de donaciones para programar una cita. Una forma de hacer la diferencia durante una emergencia de salud pública es donar sangre si puede.`;
            cod = 1;
            mostrarRespuesta(response, cod);

            response = `Una forma de hacer la diferencia durante una emergencia de salud pública es donar sangre si puede.`;
            mostrarRespuesta(response, cod);
            break;
        default:
            break;
    }
}