'use strict';

const { readCookie, deleteCookie } = require('../services/cookieService')
const { verifyToken } = require('../services/cryptoService')

const loginRequired = (req, res, next)=>{
	const { cookieInfo, err } = readCookie(req, 'jwt')

	// Verify if the cookie name exists
	if(err === 'cookie not found')
		return res.redirect('/')

	// Save the msg returned by the verifyToken function
	const { msg } = verifyToken(cookieInfo.value, true)


	// If the token is not valid, delete it and send the user to login page
	if(msg === 'invalid token'){
		deleteCookie(res, cookieInfo.name)
		return res.redirect('/student/login')
	}

	next()
}

module.exports = loginRequired

