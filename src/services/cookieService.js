'use strict';

const createCookie = (res, cookieName, data)=>{
	res.set({
		'Set-Cookie': `${cookieName}=${data}`
	})

	return true
}

const readCookie = (req, cookieName)=>{
	const cookies = req.headers.cookie.split('; ')

	const cookieNameIndex = cookies.findIndex(element=>{
		return element.includes(`${cookieName}=`)
	})

	if(cookieNameIndex === -1)
		return { err: 'cookie not found' }

	const [name, value] = cookies[cookieNameIndex].split('=')

	return { 
		cookieInfo: { name, value } 
	}
}

module.exports = { createCookie, readCookie }

