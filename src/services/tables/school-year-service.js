const { query } = require('../../database/db');

const insertSchoolYear = async (id, name, jLevel, year_id)=>{
	try{
		const queryString = `
		INSERT INTO School_years(ID, name, j_level, year_id) VALUES
		($1, $2, $3, $4);
		`;

		await query(queryString, [id, name, jLevel, year_id]);
	}catch(err){
		return { type: 'err', body: err };
	};
};

module.exports = { insertSchoolYear };

