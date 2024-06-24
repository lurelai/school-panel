const { query } = require('../database/db');

const getTable = async ({toSelect, table, arrayTyped})=>{
	let queryString = `SELECT ${toSelect} FROM ${table} WHERE `;

	const values = [];

	let i = 0;
	// arrayTyped ex: [[field, value], [field, value]]
	arrayTyped.forEach(e=>{
		if(!e[1])
			return false;

		// add a new value to the values array
		values.push(e[1]);

		queryString  += `${e[0]}=$${i+1} AND `;

		i++;
	});

	queryString = queryString.slice(0, queryString.length-5) + ';';

	try{
		const result = (await query(queryString, values)).result.rows;

		if(result.length === 0)
			return {type:'get', body: 'no match founded'};

		return {type:'get', body: result}
	}catch(err){
		return {type:'err', body: err};
	};
};

module.exports = getTable;

