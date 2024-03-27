'use strict';

const { join } = require('path')
const { getYearsService, getGradeService } = require('../../services/studentService')
const { verifyToken } = require('../../services/cryptoService')
const { readCookie } = require('../../services/cookieService')

const yearsListController = async (req, res)=>{
	// Decode the jwt token to get the id
	const { value } = readCookie(req, 'jwt')
	const { decoded } = verifyToken(value, true)

	const { result, queryTime } = await getYearsService(decoded.identify.id)

	// log the query time 
	console.log(`${queryTime}ms`)

	return res.render('years-list', { route: JSON.stringify(result) })
}

const gradeListController = async (req, res)=>{
	const { year } = req.params

	// Decode the jwt token to get the id
	const { value } = readCookie(req, 'jwt')
	const { decoded } = verifyToken(value, true)

	const result = await getGradeService(decoded.identify.id, year)

	return res.send(result)
}

module.exports = { yearsListController, gradeListController }

