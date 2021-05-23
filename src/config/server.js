const express = require('express'); //Framework para levantar el servidor
const path = require('path'); //Trabaja con las rutas del sistema operativo
const bodyParser = require('body-parser');

const app = express();

// Configuraciones generales
app.set('port', process.env.PORT || 3000); //Configuramos el puerto
app.set('view engine', 'ejs'); //Le decimos que motor de plantilla vamos a utilizar
app.set('views', path.join(__dirname, '../views')); //Le decimos donde estan las vistas 
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Archivos etáticos
app.use(express.static(path.join(__dirname, '../app/public')));


module.exports = app;