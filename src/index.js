//Archivo que arranca la aplicación
const app = require('./config/server'); //Archivo de configuración de express
require('./routes/routes')(app);


//iniciar el serevidor

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});