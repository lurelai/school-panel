const { query } = require('../database/db')

const loginService = async ()=>{
	const { result } = await query(`SELECT name FROM teachers`)
	return result
}

module.exports = { loginService }

