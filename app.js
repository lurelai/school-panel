const express = require('express')
const path = require('path')

const app = express()

app.use('/css', express.static(path.join(__dirname, '/public/css')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/student/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/student-home.html'))
})

app.get('/student/grade', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/student-grade.html'))
})

app.listen(8080, ()=>{ console.log(" Connected ") })

