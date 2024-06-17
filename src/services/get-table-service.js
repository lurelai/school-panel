const { query } = require('../database/db');

const getTable = async(table, specify, input)=>{
	const querys = {
		years: {
			byId: async (value)=>{ return (await query("SELECT * FROM Years WHERE id=$1", [value])).result.rows; },
			byYear: async (value)=>{ return (await query("SELECT * FROM Years WHERE year=$1", [value])).result.rows; }
		},

		subjects: {
			byId: async (value)=>{ return (await query("SELECT * FROM Subjects WHERE id=$1", [value])).result.rows; },
			byName: async (value)=>{ return (await query("SELECT * FROM Subjects WHERE name=$1", [value])).result.rows; }
		}
	};

	try{
		const result = await querys[table][specify](input);

		if(result.length === 0)
			return { type: 'get', body: 'math not founded' };

		return { type: 'get', body: result };
	}catch(err){
		return { type: 'err', body: err };
	};

};

module.exports = getTable;

