const express = require('express')
const app = express()

const { createConnection } = require('./src/database/db')


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
	return res.send(`
	<form method="get" action="/student/">
		<input type="text" name="id">
		<input type="submit">
	</form>
	`)
})

app.listen(4000)

