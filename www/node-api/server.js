const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require("cors");

//  Iniciando o App
const app = express();
app.use(express.json());
app.use(cors.json());

//  Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true, 
  useUnifiedTopology:true
});

// Importa todos os modelos presentes no diretório
requireDir('./src/models');

//  Rotas (GET, POST, PUT, DELETE e PATCH)
//  Passa requisições para o arquivo routes.js
app.use('/api', require('./src/routes'));

// Porta em que aplicativo esta funcionando
app.listen(3001);