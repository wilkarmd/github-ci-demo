const express = require("express");
const holamundo = express();

holamundo.get('/', (req, res) => {
    const a = 16;
    const b = 89
    const result = a * b
    res.send(`El resultado de la multiplicacion es ${a} * ${b} es: ${result}`)
});

module.exports = holamundo;