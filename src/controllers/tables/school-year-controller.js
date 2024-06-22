const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const updateTable = require('../../services/update-table-service');

// create school year
const cSchoolYear = async (req, res)=>{
	const { name, jLevel, year_id } = req.body;

	// verify the fields
	if(!name || !jLevel || !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	// get a new id
	const { id } = await createId('school-years');

	const result = await insertTable({
		table: "School_years(id, name, j_level, year_id)",
		values: [id, name, jLevel, year_id]
	});
	return res.send(result)
};

// update school year
const uSchoolYear = async (req, res)=>{
	const { id, name, yearId, jLevel } = req.body;

	// verify the fields
	if( !id || (!name && !yearId && !jLevel))
		return res.send({type: 'err', body: 'incomplet field'});

	// set the arrayTyped to the updateQuery
	const arrayTyped = [['name', name], ['year_id', yearId], ['j_level', jLevel]];

	// Updat and get the result
	const result = await updateTable("UPDATE School_years SET", {
		id: id, 
		arrayTyped: arrayTyped, 
	});

	return res.send(result);
};

module.exports = { cSchoolYear, uSchoolYear };

