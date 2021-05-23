const { nanoid } = require('nanoid');
const dbConnection = require('../config/dbConnection');

let password = null;
module.exports = app => {
    const connection = dbConnection();

    app.get('/index', (req, res) => {
        res.render('index');
    });

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/preguntas', (req, res) => {
        res.render('preguntas');
    });

    app.post('/preguntas', async(req, res) => {
        const { nombre, aPaterno, aMaterno, mail, pregunta } = req.body;
        const id = nanoid(10)
        console.log(id);

        await connection.query('INSERT INTO usuario SET?', {
            id,
            nombre,
            aPaterno,
            aMaterno,
            mail
        });
        await connection.query('INSERT INTO preguntas SET?', {
            id,
            pregunta
        }, (err, result) => {
            res.redirect('/');
        });
    });
};