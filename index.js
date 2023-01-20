
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

const { 
    navigate,
    header,
    formCadastreClients,
    } = require("./components/allComponents")

app.get("/",(req,res)=>{
    Clientes.findAll().then((dataclients)=>{
        res.render("home",{ 
            navigate,
            header,
            formCadastreClients,
            dataclients,
            styles:[
                {css:"/css/navigate.css"},
                {css:"/css/header.css"},
                {css:"/css/form.css"},
                {css:"/css/home.css"}
            ],
            scripts:[
                {js:"/js/navgate.js"},
                {js:"/js/form.js"}
            ]
        })
    })
})

app.post("/cadastarClient",(req,res)=>{
    let clientesData;
    Clientes.create({
        nome:req.body.nome,
        email:req.body.email,
        telefone:req.body.telefone,
        endereco:req.body.endereco,
        cep:req.body.cep,
        cpf:req.body.cpf
    }).then(
            res.redirect("/")
    )
   
})
app.listen(port,console.log("aberto em loclhost: ",port));

