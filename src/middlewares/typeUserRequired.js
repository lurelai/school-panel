'use strict';
const { verifyToken } = require('../services/cryptoService')
const { readCookie } = require('../services/cookieService')

const studentRequired = (req, res, next)=>{
	const { cookieInfo } = readCookie(req, 'jwt')
	const { msg, decoded } = verifyToken(cookieInfo.value, true)

	// If it's invalid now, redirect to the /student to verify again
	if(msg !== 'valid token')
		return res.redirect('/student/')

	// If it's not a student token, just send it
	if(decoded.info.uses !== 'only student')
		return res.send('Only students')

	return next()
}

module.exports = { studentRequired }

