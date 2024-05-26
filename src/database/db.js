const { Pool } = require('pg')

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

		return { connectionTime: end }
	}catch(err){
		throw err
	}
}

const query = async (queryString, args)=>{
	await pool.query("INSERT INTO users VALUES('Ariel');")

	const start = Date.now()
	const result = await pool.query(queryString, args)
	const end = Date.now() - start

	return { result, queryTime: end }
}

module.exports = { connection, query }

