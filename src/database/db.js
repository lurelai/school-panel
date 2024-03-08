const { Pool } = require('pg')

// Configure the dotenv
require('dotenv').config()

const createConnection = async ()=>{
    const pool = new Pool({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.HOST,
        database: process.env.DATABASE,
        port: process.env.PORT
    })

    const client = await pool.connect()

    console.log("Connected")
}

module.exports = createConnection

