const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser')

const url =  'mongodb+srv://usuario_admin:12262628@clusterapi-gfmyz.mongodb.net/test?retryWrites=true&w=majority';

var options = {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true};

mongoose.connect(url,options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) =>{
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () =>{
    console.log('Aplicação desconectada com o banco de dados');
})

mongoose.connection.on('connected', () =>{
    console.log('Aplicação conectada com o banco de dados');
})

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

const indexRoute = require('./Routes/index')
const usersRoute = require('./Routes/users')

app.use('/', indexRoute)
app.use('/users', usersRoute)

app.listen(3000);

module.exports = app;