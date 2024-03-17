const express = require('express')
const app = express()

const { createConnection, query } = require('./src/database/db')


// LockUp var
let __LOCK__ = false;

// LockUp function
app.use((req, res, next)=>{
	if(__LOCK__)
		return res.sendStatus(401)

	next()
})


// Connection with database
createConnection().then((resolve)=>{
	console.log(resolve)
}).catch(err=>{ __LOCK__ = true })


// Root
app.get('/', async (req, res)=>{
	res.send('okay')
})

app.listen(4000)

