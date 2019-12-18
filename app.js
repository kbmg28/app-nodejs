const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let obj = req.query;
    return res.send({message: `${obj.nome} possui ${obj.idade} anos.`})
})

app.post('/', (req, res) => {
    return res.send ({message: 'Tudo ok com o método POST!'})
})

app.listen(3000);

module.exports = app;