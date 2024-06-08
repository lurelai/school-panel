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

const updateSchoolYear = async (values)=>{
	try{
		const queryString = 
			`
			UPDATE School_years 
			SET name=$1, j_level=$2 WHERE id=$3`

		await query(queryString, values);

		return { type: 'update', body: 'ok' }
	}catch(err){
		return {type: 'err', body: err}
	};
};

module.exports = { insertSchoolYear, updateSchoolYear };

