'use strict';

const { sign, verify } = require('jsonwebtoken')

const createToken = (data)=>{
	return sign(data, process.env.JSON_WEB_TOKEN_KEY)
}

module.exports = { createToken }

