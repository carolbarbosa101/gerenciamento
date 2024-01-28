const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgresql',
  host: 'localhost',
  username: 'gerente',
  password: '1991',
  database: 'gerenciamento_clientes',
});
class Cliente extends Model{}

Cliente.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enderecoX: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  enderecoY: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { 
sequelize,
modelName: 'Cliente',
});

module.exports = {Cliente, sequelize};