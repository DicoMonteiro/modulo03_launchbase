const express = require('express')
const nunjucks = require('nunjucks')

const courses = require("./data_courses")

const links = require("./links_rocketseat")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


// Definindo as rotas
server.get("/", function(req, res) {
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

    return res.render("home", { data: data })
})

server.get("/about", function(req, res) {
    const data = [
        {name: "HTML"},
        {name: "CSS"},
        {name: "JavaScript"},
        {name: "NodeJS"},
        {name: "ReactJS"},
        {name: "React-Native"}
    ]

    return res.render("about", { data: data, links: links })
})

server.get("/courses", function(req, res) {
    return res.render("courses", { items: courses, links: links })
})

server.get("/course/:id", function(req, res) {
    // Pegando o ID pelo parametro
    const id = req.params.id

    const course = courses.find(function(course) {
        return course.id == id
    })

    if (!course) {
        return res.send("Curso not found!")
    }

    return res.render("course", { item: course })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})



server.listen(5000, function() {
    console.log("server is running.")
})