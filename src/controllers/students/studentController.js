'use strict';

const { verifyToken } = require('../../services/cryptoService')
const { readCookie } = require('../../services/cookieService')
const { join } = require('path')

const yearsListController = async (req, res)=>{
	return res.sendFile(join(__dirname, '../../../public/views/years-list.html'))
}

const gradeListController = async (req, res)=>{
	return res.send('grade list controller (welcome)')
}

module.exports = { yearsListController, gradeListController }

