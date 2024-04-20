'use strict';
const Pool = require('pg-pool')

// configure dotenv
require('dotenv').config()

const pool = new Pool({
	database: process.env.POSTGRES_DB,
	port: process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST
})

const createConnection = async ()=>{
	try{
		console.log("Trying to connect with postgres...")
		const start = Date.now()
		await pool.connect()
		const end = Date.now() - start

		console.log("Postgres connection setted")
		return { connectionTime: end }
	}catch(err){
		console.log(err)
		return { err }
	}
}

module.exports = { createConnection }

