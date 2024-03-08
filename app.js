const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/css', express.static(path.join(__dirname, '/public/css')))
app.use('/js', express.static(path.join(__dirname, '/public/js')))

// Index route
app.get('/', (req, res)=>{ res.sendFile(path.join(__dirname, 'views/index.html')) })

// Students routes
require('./src/routes/studentRoute')(app)
require('./src/routes/teacherRoute')(app)

app.get('/admin/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/admin/home.html'))
})

app.get('/admin/home/school-year-list', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/admin/school-year-list.html'))
})

app.get('/admin/home/school-year-list/classes-list', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/admin/classes-list.html'))
})

app.get('/admin/home/school-year-list/classes-list/class-schema', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/admin/class-schema.html'))
})

app.listen(8080, ()=>{ console.log(" Connected ") })

