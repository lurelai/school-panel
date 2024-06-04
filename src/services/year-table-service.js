'use strict';
const { query } = require('../database/db');

const insertYear = async (id, year)=>{
	try{
		await query('INSERT INTO years(id, year) VALUES($1, $2)', [id, year]);

		return { type: 'msg', body: 'inserted', log: `INSERTED // ID: ${id} // YEAR: ${year}` };
	}catch(err){
		return { type: 'err', body: err };
	};
};

const getYear = async(by, value)=>{
	try{
		let result = null;

		if(by === 'id')
			result = (await query("SELECT * FROM YEARS WHERE id=$1", [value])).result.rows[0];

		if(by === 'name')
			result = (await query("SELECT * FROM YEARS WHERE year=$1", [value])).result.rows[0];

		if(!result)
			return { type: 'get', body: "didn't found the referenced year" };

		return { type: 'get', body: result };
	}catch(err){
		return { type: 'err', body: err };
	};
};

module.exports = { insertYear, getYear };

