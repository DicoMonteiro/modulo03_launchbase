// Construindo um servidor para a aplicação, usando o 'express' para criar o servidor e definir as rotas
const express = require('express')
// Trabalhando com nunjucks, para facilitar a interação com o motor de template (Template Engine)
// Deixa as páginas mais dinâmicas, trabalhando com centralização de dados para páginas
const nunjucks = require('nunjucks')

const server = express()

// Verifica todos os dados estaticos para ser usado na aplicação, por exemplo, arquivos CSS, etc
server.use(express.static('public'))

// Solicitando a configuração do server para tudo do html/njk dentro do projeto
server.set("view engine", "njk")

nunjucks.configure("views", {
    // Determinando o(s) objeto(s) que serão utilizados. No momento somente o 'express' e sua variavel 'server'
    express:server
})

// Definindo rotas para a aplicação
server.get("/", function(req, res) {
    // return res.send("Hi! How's going?")
    // Trazendo o Front para o servidor
    return res.render("about")
})

server.get("/portifolio", function(req, res) {
    return res.render("portifolio")
})


// Usando o package 'nodemon' para manter o servidor em execução e atualizar automaticamente
server.listen(5000, function () {
    console.log("server is running.")
})