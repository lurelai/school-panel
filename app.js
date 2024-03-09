const express = require('express')
const path = require('path')

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/css', express.static(path.join(__dirname, '/public/css')))
app.use('/js', express.static(path.join(__dirname, '/public/js')))

// Db connection
require('./src/database/db').createConnection()


// Index route
app.get('/', (req, res)=>{ res.sendFile(path.join(__dirname, 'views/index.html')) })


// Routes
require('./src/routes/studentRoute')(app)
require('./src/routes/teacherRoute')(app)
require('./src/routes/adminRoute')(app)


app.listen(8080, ()=>{console.log("Connected")})

