// Construindo um servidor para a aplicação, usando o 'express' para criar o servidor e definir as rotas
const express = require('express')
// Trabalhando com nunjucks, para facilitar a interação com o motor de template (Template Engine)
// Deixa as páginas mais dinâmicas, trabalhando com centralização de dados para páginas
const nunjucks = require('nunjucks')

// Arquivo js com os dados a serem preenchidos no front-end
const videos = require("./data")

const server = express()

// Verifica todos os dados estaticos para ser usado na aplicação, por exemplo, arquivos CSS, etc
server.use(express.static('public'))

// Solicitando a configuração do server para tudo do html/njk dentro do projeto
server.set("view engine", "njk")

nunjucks.configure("views", {
    // Determinando o(s) objeto(s) que serão utilizados. No momento somente o 'express' e sua variavel 'server'
    express:server,
    // Permitir imprimir codigos html na página
    autoescape: false
})

// Definindo rotas para a aplicação
server.get("/", function(req, res) {
    // return res.send("Hi! How's going?")
    // Trazendo o Front para o servidor
    // Passando os dados a serem preenchidos no front-end direto na
    // chamada da rota
    const data = {
        avatar_url: "https://avatars3.githubusercontent.com/u/22827479?s=400&u=4c674050a76e960b99f30280c48a0ce3f59cd2d2&v=4",
        name: "Adriano Almeida",
        role: "Quality Assurance and Developer Javascript",
        description: 'Programador iniciante em Javascript e Nodejs, focado na qualidade. Estudante da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.',
        links: [
            {
                name: "Github",
                url: "https://github.com/DicoMonteiro"
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/adriano-barreto-monteiro-almeida/"
            }
        ]
    }

    return res.render("about", { data: data })
})

server.get("/portifolio", function(req, res) {
    // Chamando os dadosa serem preenchidos no front-end
    // por um arquivo js
    return res.render("portifolio", { items: videos })
})


// Usando o package 'nodemon' para manter o servidor em execução e atualizar automaticamente
server.listen(5000, function () {
    console.log("server is running.")
})