var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('saludo/:name', function (req, res) {
    res.send(`Hello ${req.params.name}!`);
});

app.get('*', function (req, res) {
    res.send('Servicio no implementado :(');
});

app.get('/despedida/:name', function (req, res) {
    res.send(`Bye ${req.params.name}!`);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});