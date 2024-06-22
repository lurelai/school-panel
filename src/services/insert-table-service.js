const { query } = require('../database/db');

const insertTable = async ({table, values})=>{
	// query string needs the table value with the orden of the passed values
	let queryString = "INSERT INTO " + table + " VALUES(";
	
	values.forEach((e, i)=>{
		queryString += `$${i+1},`;	
	});

	// remove the comma and close the parentheses
	queryString = queryString.slice(0, queryString.length - 1);
	queryString += ")";

	try{
		// try to insert
		await query(queryString, values);

		return { type: 'msg', body: 'inserted' };
	}catch(err){
		return { type: 'err', body: err };
	};
};

module.exports = insertTable;

