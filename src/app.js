require('./config/config');
const express = require('express');
const app = express();
const portNumber = process.env.PORT;

app.get('/', (req, res) => {
    console.log('Hola Mundo!!');
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.json({
        ok: true,
        Message: `Hola usuario ${name}`
    });
});

app.listen(portNumber, () => {
    console.log(`Servidor escuchando en puerto ${portNumber}`);
});