'use strict';

const { loginService, getYearsService } = require('../../services/studentService')
const { createToken } = require('../../services/cryptoService')
const { createCookie } = require('../../services/cookieService')

const loginController = async (req, res)=>{
	const { id, password } = req.body

	if(!id)
		return res.send("You can't take requests without the id field")

	if(!password)
		return res.send("You can't take requests without the password field")

	// if all field are ok, send a request to database
	const { result: loginResult, err, queryTime: loginQueryTime } = await loginService(id, password)

	// Logging the query time
	console.log(`Login query time: ${loginQueryTime}ms`)

	// if there's some err, send it
	if(err)
		return res.send(err)

	const { result: routeResult, queryTime: routeQueryTime } = await getYearsService(id)

	// Set a JWT token
	createCookie(res, 'jwt', createToken(loginResult))
	createCookie(res, 'route', createToken(JSON.stringify(routeResult)))

	return res.redirect('/student')
}

module.exports = loginController

