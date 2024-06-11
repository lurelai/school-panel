'use strict';
const { query } = require('../../database/db');

const insertSchoolYear = async (id, name, jLevel, year_id)=>{
	try{
		const queryString = `
		INSERT INTO School_years(ID, name, j_level, year_id) VALUES
		($1, $2, $3, $4);
		`;

		await query(queryString, [id, name, jLevel, year_id]);

		return { type: 'insert', body: 'ok' };
	}catch(err){
		return { type: 'err', body: err };
	};
};

const updateSchoolYear = async (queryString, values)=>{
	try{
		await query(queryString, values);

		return { type: 'update', body: 'ok' }
	}catch(err){
		return {type: 'err', body: err}
	};
};

module.exports = { insertSchoolYear, updateSchoolYear };

