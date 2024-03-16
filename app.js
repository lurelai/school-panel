const express = require('express')
const app = express()

require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	host: process.env.POSTGRES_HOST,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DATABASE,
})

pool.connect()

app.get('/', async (req, res)=>{
	const response = await pool.query('SELECT * FROM students;')
	console.log(response)

	res.send('okay')
})

app.listen(4000)

