'use strict';
const { query } = require('../../database/db');

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

module.exports = { getYear };

