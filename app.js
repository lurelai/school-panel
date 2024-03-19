const express = require('express')
const app = express()

const { createConnection, query } = require('./src/database/db')


// PANIC VAR three possible values {null(default), false, true}
let __LOCK__ = null;


// Connection with database
createConnection().then(({msg, connectionTime})=>{
	console.log(`${msg}\nConnection time: ${connectionTime}ms`)

	__LOCK__ = false
}).catch(err=>{ 
	__LOCK__ = true 

	console.log(err)
})


// PANIC ROUTE
app.use((req, res, next)=>{
	if(__LOCK__ === null)
		return res.send('Wait a minute... We are trying to connect the database').status(500)

	if(__LOCK__)
		return res.send("There\'s something wrong with the database...").status(500)

	return next()
})


// Able to use json and body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes
require('./src/routes/studentRoute')(app)


// Root
app.get('/', async (req, res)=>{
	console.log(req.body)
	query("INSERT INTO students(name, short_name, age, id, infos) VALUES($1, $2, $3, $4, $5)", Object.values(req.body))

	return res.send('okay')
})

app.listen(4000)

