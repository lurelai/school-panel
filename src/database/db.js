const { Pool } = require('pg')
const { readFileSync } = require('fs')
const path = require('path')

// Configure the dotenv
require('dotenv').config()

const pool = new Pool({
	user:			process.env.POSTGRES_USER,
	host: 			process.env.POSTGRES_HOST,
	password:		process.env.POSTGRES_PASSWORD,
	port:			process.env.POSTGRES_PORT,
	database:		process.env.POSTGRES_DATABASE,
})

const createConnection = async ()=>{
	try{
		// CONNECTION WITH DB
		const start = Date.now()

		console.log("Trying to connect with database")
		await pool.connect()

		const end = Date.now() - start

		// CREATE TABLES
		await pool.query( readFileSync(path.join(__dirname, 'create-table.sql'), 'ASCII') )

		return { msg: "Connected", connectionTime: end }
	}catch(err){
		throw err;
	}
}

const query = async (qr="", param=[])=>{
	const start = Date.now()
	const result = await pool.query(qr, param)
	const end = Date.now() - start

	return { result, queryTime: end };
}

module.exports = { createConnection, query }

