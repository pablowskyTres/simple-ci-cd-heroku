var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/:name', function (req, res) {
    res.send(`Hello ${req.params.name}!`);
});

app.get('*', function (req, res) {
    res.send('Servicio no implementado :(');
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});