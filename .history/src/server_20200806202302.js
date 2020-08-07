const proffys = [{

}]

function pageLanding(req, res){
    return res.sendFile(__dirname + "/views/index.html")
}

function pageStudy(req, res){
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res){
    return res.sendFile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()
server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

