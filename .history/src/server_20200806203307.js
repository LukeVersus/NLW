const proffys = [{

}]

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html")
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
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

