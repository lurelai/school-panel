'use strict';
const { query } = require('../database/db');

const insertYear = async (ID, year)=>{
	try{
		await query('INSERT INTO years(id, year) VALUES($1, $2)', [ID, year])

		return { type: 'msg', body: 'inserted' }
	}catch(err){
		return { type: 'err', body: err }
	}
};

module.exports = { insertYear }

