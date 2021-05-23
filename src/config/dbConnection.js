const mysql = require('mysql');
// Esto retornará una conexión
module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'covidbot'
    });
}