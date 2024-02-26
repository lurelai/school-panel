const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/student-home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/student-home.html'))
})

app.listen(8080, ()=>{ console.log(" Connected ")})

