const express = require('express')
const app = express()




// External routes
require('./src/routes/studentRoute')(app)

app.get('/', (req, res)=>{
	return res.send('okay')
})

app.listen(8000, ()=>{
	console.log("Server on")
})

