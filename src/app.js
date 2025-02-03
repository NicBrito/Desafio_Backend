const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Tarefa = require('./models/Tarefa');
const tarefasRouter = require('./routes/tarefas');

const app = express();


app.use(bodyParser.json());


app.use('/tarefas', tarefasRouter);


sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});