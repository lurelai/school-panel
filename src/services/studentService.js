const { query } = require('../database/db')

const loginService = async (id, password)=>{
	// For first, verify if the student exists, if exists, just continue, if not, return an error
	const verifyStudentQuery = "SELECT name FROM students WHERE id=$1 AND password=$2"
	const { result: studentResult } = await query(verifyStudentQuery, [id, password])

	if(studentResult.rows.length === 0)
		return { message: null, err: "User or password not founded, please, check again" }

	if(studentResult.rows.length > 1)
		return { message: null, err: "There's something wrong with your informations, please, contact your school to resolve it"}


	// Complex query, it will get the student route, to return as a cookie for the front-end
	// The main select just remove 'grade' of the route, the sub-query give us a table separing all years(ex: 2024, 2023) in rows
	const getStudentRoute = 
		`
	SELECT route - 'grade' as route, year
	FROM (SELECT years -> jsonb_object_keys(years) as route, jsonb_object_keys(years) as year FROM students where id=$1 AND password=$2)
	ORDER BY year DESC;
	`
	const { result: studentRoute } = await query(getStudentRoute, [id, password])

	// verify if exists any route
	if(studentRoute.rows.length === 0)
		return { message: "Okay", results: { studentResult: studentResult.rows, studentRoute: "NR"}, err: null} //NR=no route

	return { message: "Okay", results: { studentRoute: studentRoute.rows, studentResult: studentResult.rows }, err: null}
}

module.exports = { loginService }

