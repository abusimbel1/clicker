const express = require('express')
const path = require("path")
const app = express()
app.use(express.static(__dirname + '/dist/clicker-hw'))
app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname+'/dist/clicker-hw/index.html'))
})
app.listen(process.env.PORT || 8080)