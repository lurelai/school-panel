const express = require('express')
const databaseConnection = require('./src/database/db') // Database connection


// Init te app
const app = express()

// uses
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Routes
require('./src/routes/registerRouter')(app) // Register Router


// Connect with the database
databaseConnection()


// default route
app.get('/', (req, res)=>{
    res.send('Okay')
})


// Server on
app.listen(8080, port=>console.log(`Server on`))

