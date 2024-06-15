const { query } = require('../database/db');

const getTable = async(table, specify, input)=>{
	const querys = {
		years: {
			byId: async (value)=>{ return (await query("SELECT * FROM YEARS WHERE id=$1", [value])).result.rows[0]; },
			byName: async (value)=>{ return (await query("SELECT * FROM YEARS WHERE year=$1", [value])).result.rows[0]; }
		}
	};

	try{
		const result = await querys[table][specify](input);

		return { type: 'get', body: result };
	}catch(err){
		return { type: 'err', body: err};
	};

};

module.exports = getTable;

