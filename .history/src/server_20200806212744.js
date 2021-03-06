const proffys = [{
    name: string,
    avatar: string,
    whatsapp: number,
    bio: "string",
    subject: "number[]",
    cost: "number",
    weekday: "number[]",
    time_from: "number",
    time_to: "number"
}]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Espanhol",
    "Física",
    "Geografia",
    "História",
    "Inglês",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
]

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query 
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

