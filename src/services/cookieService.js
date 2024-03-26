const createCookie = (res, cookieName, data)=>{
	res.set({
		'Set-Cookie': `${cookieName}=${data}`
	})

	return true
}

module.exports = { createCookie }

