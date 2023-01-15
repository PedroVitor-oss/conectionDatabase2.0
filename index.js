
//config of routs
const express = require("express");
const app = express();
const port  = process.env.PORT||3000;
//arquivos estaticos
const path = require("path");
app.use(express.static(path.join(__dirname,'public')))

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
//carregando componentes

const { navigate,header } = require("./components/allComponents")

app.get("/",(req,res)=>{
    Clientes.findAll().then((dataClients)=>{
        res.render("home",{ 
            navigate,
            header,
            dataClients,
            styles:[
                {css:"/css/navigate.css"},
                {css:"/css/header.css"}
            ],
            scripts:[
                {js:"/js/navgate.js"}
            ]
        });
    })
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
        clientes:clientesData,
    })
    });
    
})
app.listen(port,console.log("aberto em loclhost: ",port));

