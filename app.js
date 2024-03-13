const express = require('express')
const path = require('path')

const app = express()


// Uses
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Statics
app.use('/css', express.static(path.join(__dirname, '/public/css')))
app.use('/js', express.static(path.join(__dirname, '/public/js')))


// Sets
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Db connection
require('./src/database/db').createConnection()


// Index route
app.get('/', (req, res)=>{ 
    res.sendFile(path.join(__dirname, 'views/index.html')) 
})


// Routes
require('./src/routes/studentRoute')(app)
require('./src/routes/teacherRoute')(app)
require('./src/routes/adminRoute')(app)


app.listen(8080, ()=>{console.log("Server running")})

