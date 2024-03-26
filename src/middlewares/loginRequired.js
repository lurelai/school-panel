'use strict';

const { readCookie } = require('../services/cookieService')
const { verifyToken } = require('../services/cryptoService')

const loginRequired = (req, res, next)=>{
	const { cookieInfo, err } = readCookie(req, 'jwt')

	if(err === 'cookie not found')
		return res.redirect('/')

	console.log(verifyToken(cookieInfo.value))

	next()
}

module.exports = loginRequired

