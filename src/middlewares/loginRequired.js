const { readCookie } = require('../services/cookieService')

const loginRequired = (req, res, next)=>{
	const { cookieInfo, err } = readCookie(req, 'jwt')

	if(err === 'cookie not found')
		return res.redirect('/')

	next()
}

module.exports = loginRequired

