const express = require('express')
const loginRoute = require('./src/routes/loginRoute.js')

// Init te app
const app = express()


// uses
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login', loginRoute)

// routes


// default route
app.get('/', (req, res)=>{
    res.send('Okay')
})


// Server on
app.listen(8080, port=>console.log(`Server on`))

