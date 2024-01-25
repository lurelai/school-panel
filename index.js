const express = require('express')
const app = express()

// uses
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// default route
app.get('/', (req, res)=>{
    res.send('Okay')
})


// Server on
app.listen(8080, port=>console.log(`Server on`))

