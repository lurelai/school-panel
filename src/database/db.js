const { Pool } = require('pg')
const { readFileSync } = require('fs')
const { join } = require('path')

// Configure the dotenv
require('dotenv').config()


const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT
})

const createConnection = async ()=>{
    console.log("Tring to connect with database...")
    try{
        const client = await pool.connect()
        console.log("Connected")
        
        // Create tables that don't exists
        pool.query(readFileSync(join(__dirname, 'tables.sql'), 'ASCII'))

        return;
    }catch(err){ throw err; }
}

const query = async (text, params=null)=>{
    const result = await pool.query(text, params)

    return new Promise((resolve, reject)=>{
        resolve(result)
    })
}

module.exports = { createConnection, query }

