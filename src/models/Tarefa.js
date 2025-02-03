const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarefa = sequelize.define('Tarefa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  descricao: DataTypes.STRING, 
  status: {
    type: DataTypes.ENUM('pendente', 'realizando', 'concluída'),
    allowNull: false
  },
  data_vencimento: DataTypes.DATE 
});

module.exports = Tarefa;