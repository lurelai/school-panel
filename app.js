const express = require('express')
const path = require('path')

const app = express()

app.use('/css', express.static(path.join(__dirname, '/public/css')))
app.use('/js', express.static(path.join(__dirname, '/public/js')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/student/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/students/home.html'))
})

app.get('/student/grade', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/students/grade.html'))
})

app.get('/teacher/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/teachers/home.html'))
})

app.get('/teacher/grade', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/teachers/grade.html'))
})

app.get('/admin/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/admin/home.html'))
})

app.get('/admin/home/school-year-list', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/admin/school-year-list.html'))
})

app.listen(8080, ()=>{ console.log(" Connected ") })

