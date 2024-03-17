const { Pool } = require('pg')

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
		console.log("Trying to connect with database")
		await pool.connect()

		return { msg: "Connected" }
	}catch(err){
		throw err;
	}
}

const query = async (qr="", param=[])=>{
	const result = pool.query(qr, param)

	return result;
}

module.exports = { createConnection, query }

