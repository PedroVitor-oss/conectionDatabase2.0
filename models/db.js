//conection with database
const { Sequelize, Model, DataTypes } = require('sequelize');
//conoction database online
//mysql://upeca0rjkp7mxx2n:hcqpx9ikltnbqkxv@j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/w6t74vgidxtzbtqo
const sequelize = new Sequelize('w6t74vgidxtzbtqo', 'upeca0rjkp7mxx2n', 'hcqpx9ikltnbqkxv', {
  host: 'j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306',
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