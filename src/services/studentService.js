const { query } = require('../database/db')

const loginService = async (id, password)=>{
	// For first, verify if the student exists, if exists, just continue, if not, return an error
	const verifyStudentQuery = "SELECT id FROM students WHERE id=$1 AND password=$2"
	const { result, queryTime } = await query(verifyStudentQuery, [id, password])

	if(result.rows.length === 0)
		return { message: null, err: "User or password not found, please, check again" }

	if(result.rows.length > 1)
		return { message: null, err: "There's something wrong with your informations, please, contact your school to resolve it"}

	return { 
		message: "Okay", 
		result: result.rows, 
		queryTime,
		err: null 
	} 
}

// Know, the password isn't necessary, the validation to stay here will be made by JWT
const getYearsService = async (id)=>{
	// Complex query, it will get the student route, to return as a cookie for the front-end
	// The main select just remove 'grade' of the route, the sub-query give us a table separing all years(ex: 2024, 2023) in rows
	const getStudentRouteQuery = 
		`
	SELECT year, route - 'grade' as school_year_and_class
	FROM (SELECT years -> jsonb_object_keys(years) as route, jsonb_object_keys(years) as year FROM students where id=$1)
	ORDER BY year DESC;
	`
	const { result, queryTime } = await query(getStudentRouteQuery, [id])

	// verify if exists any route
	if(result.rows.length === 0)
		return { message: "Okay", result: "NY", queryTime, err: null } // NY = no year

	return {
		message: "Okay", 
		result: result.rows,
		queryTime,
		err: null
	}
}

module.exports = { loginService, getYearsService }

