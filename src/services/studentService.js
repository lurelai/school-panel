const { query } = require('../database/db')

const loginService = async (id, password)=>{
	const { result } = await query(`SELECT name FROM students WHERE id=$1 AND password=$2`, [id, password])

	if(result.rows.length === 0)
		return { message: null, err: "User or password not founded, please, check again" }

	if(result.rows.length > 1)
		return { message: null, err: "There's something wrong with your informations, please, contact your school to resolve it"}

	return { message: "Okay", err: null}
}

module.exports = { loginService }

