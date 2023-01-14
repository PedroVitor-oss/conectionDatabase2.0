//conection with database
const { Sequelize, Model, DataTypes } = require('sequelize');
//conoction database online
mysql://xgt17nun7rqc61vr:heerqhek9m3c71sl@l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/v10uyo8p78ukofnu
const sequelize = new Sequelize('impersul', 'root', '1234', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
const Clientes = sequelize.define('clientes',{
    nome: {
        type:DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    endereco:{
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING,
    },
}
);
const Servico = sequelize.define('servicos',{
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.TEXT
    },
    valorUnitario: {
        type: DataTypes.INTEGER
    },
});
// Clientes.sync({force:true})

module.exports = {
    Clientes:Clientes,
    Servico:Servico
}