const { Pool } = require('pg')
const { join } = require('path')
const { readFileSync } = require('fs')

require('dotenv').config()

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	port: process.env.POSTGRES_PORT,
	host: process.env.POSTGRES_HOST
})

const connection = async ()=>{
	try{
		const start = Date.now()
		await pool.connect()
		const end = Date.now() - start

		await pool.query(readFileSync(join(__dirname, 'create-tables.sql'), 'ASCII'))

		return { connectionTime: end }
	}catch(err){
		throw err
	}
}

const query = async (queryString, args)=>{
	const start = Date.now()
	const result = await pool.query(queryString, args)
	const end = Date.now() - start

	return { result, queryTime: end }
}

module.exports = { connection, query }

