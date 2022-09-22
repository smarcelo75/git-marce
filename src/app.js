require('./config/config');
const express = require('express');
const app = express();
const portNumber = process.env.PORT;

app.get('/:name', (req, res) => {
    console.log('Hola Mundo!!');
    const name = req.params.name;
    res.json({
        ok: true,
        Message: `Hola ${name}`
    });
});

app.listen(portNumber, () => {
    console.log(`Servidor escuchando en puerto ${portNumber}`);
});