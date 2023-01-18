//conection with database
const { Sequelize, Model, DataTypes } = require('sequelize');
//conoction database online
//(database, user, password )
const sequelize = new Sequelize('railway', 'root', 'NOtPqSSPPnrCN1qmwQCx', {
    port: 6753,
    host: 'containers-us-west-178.railway.app',
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
// Servico.sync({force:true})

module.exports = {
    Clientes:Clientes,
    Servico:Servico
}