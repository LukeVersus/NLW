const express = require('express')
const server = express()
.use()
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/", (req, res) =>{
    return res.send("")
})
.listen(5500)

