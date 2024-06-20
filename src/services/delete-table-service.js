const { query } = require('../database/db');

const deleteTable = async ({ table, id })=>{
	const queryString = `DELETE FROM ${table} WHERE ID=$1;`;
	try{
		const rowCount = (await query(queryString, [id])).result.rowCount;

		if(rowCount === 0)
			return {type: 'deleted', body: "didn't catch this id"};

		return {type: 'deleted', body: 'ok'};
	}catch(err){
		console.log(err)
		return {type: 'err', body: err};
	}
};

module.exports = deleteTable;

