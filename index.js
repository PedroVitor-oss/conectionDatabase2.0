
//config of routs
const express = require("express");
const app = express();

// configurar handlebars
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars.engine('main'));
app.set('view engine', 'handlebars');
app.set('views', './views');
//configurar body parser
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
//carregando tabelas
const db = require("./models/db");
const Clientes = db.Clientes;
app.get("/",(req,res)=>{
    res.render("home");
})
app.post("/cadastarClient",(req,res)=>{
    Clientes.create({
        nome:req.body.nameClient,
        email:req.body.email,
        telefone:req.body.telefone,
        endereco:req.body.endereco,
        cep:req.body.cep,
        cpf:req.body.cpf
    })
    let clientesData;
    Clientes.findAll().then((data)=>{
        clientesData = data;

        res.render("clientes",{
        clientes:clientesData
    })
    });
    
})
app.listen(3000,console.log("aberto em loclhost:3000"));
