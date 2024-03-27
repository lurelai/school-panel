'use strict';

const { verifyToken } = require('../services/cryptoService')
const { readCookie } = require('../services/cookieService')

const studentRequired = (req, res, next)=>{
	// Get the cookie
	const { value } = readCookie(req, 'jwt')
	const { msg, decoded } = verifyToken(value, true)

	// If it's not invalid now, redirect to the /student to verify again
	if(msg !== 'valid token')
		return res.redirect('/student/')

	// If it's not a student token, just send it
	if(decoded.info.uses !== 'only student')
		return res.send('Only students')

	return next()
}

module.exports = { studentRequired }

