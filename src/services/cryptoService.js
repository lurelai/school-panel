'use strict';

const { sign, verify } = require('jsonwebtoken')

const createToken = (data)=>{
	return sign(data, process.env.JSON_WEB_TOKEN_KEY)
}

const verifyToken = (token, needDecoded=false)=>{
	const possiblesPrefix = {
		student: null
	}

	return verify(token, process.env.JSON_WEB_TOKEN_KEY, (err, decoded)=>{
		if(err)
			return { msg: 'invalid token' }
			
		if(needDecoded)
			return { msg: 'valid token', decoded }

		return { msg: 'valid token' }
	})	
}

module.exports = { createToken, verifyToken }

