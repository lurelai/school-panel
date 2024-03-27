'use strict';

const createCookie = (res, cookieName, data)=>{
	res.set({
		'Set-Cookie': `${cookieName}=${data}`
	})

	return true
}

const readCookie = (req, cookieName)=>{
	// Verify if exists any cookie
	if(!req.headers.cookie)
		return { err: 'cookie not found' }

	const cookies = req.headers.cookie.split('; ')

	const cookieNameIndex = cookies.findIndex(element=>{
		return element.includes(`${cookieName}=`)
	})

	if(cookieNameIndex === -1)
		return { err: 'cookie not found' }

	const [name, value] = cookies[cookieNameIndex].split('=')

	return { name, value }
}

const deleteCookie = (res, cookieName)=>{
	res.set({
		'Set-Cookie': `${cookieName}=sorry; Max-Age=0`
	})

	return { msg: 'cookie deleted' }
}

module.exports = { createCookie, readCookie, deleteCookie }

