const express = require('express')
const app = express()

const { createConnection } = require('./src/database/db')
createConnection()


app.get('/', (req, res)=>{
	return res.send('hello world')
})

app.listen(8000, ()=>{
	console.log('app running')
})

