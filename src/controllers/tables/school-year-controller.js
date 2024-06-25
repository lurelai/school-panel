const createId = require('../../services/create-id-service');
const insertTable = require('../../services/insert-table-service');
const getTable = require('../../services/get-table-service');
const updateTable = require('../../services/update-table-service');

// create school year
const cSchoolYear = async (req, res)=>{
	const { name, schoolYearLevel, year_id } = req.body;

	// verify the fields
	if(!name || !schoolYearLevel || !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	// get a new id
	const { id } = await createId('schoolYears');

	const result = await insertTable({
		table: "School_years(id, name, school_year_level, year_id)",
		values: [id, name, schoolYearLevel, year_id]
	});
	return res.send(result)
};

// update school year
const uSchoolYear = async (req, res)=>{
	const { id, name, yearId, schoolYearLevel } = req.body;

	// verify the fields
	if( !id || (!name && !yearId && !schoolYearLevel))
		return res.send({type: 'err', body: 'incomplet field'});

	// set the arrayTyped to the updateQuery
	const arrayTyped = [['name', name], ['year_id', yearId], ['school_year_level', schoolYearLevel]];

	// Updat and get the result
	const result = await updateTable("UPDATE School_years SET", {
		id: id, 
		arrayTyped: arrayTyped, 
	});

	return res.send(result);
};


const rSchoolYear = async (req, res)=>{
	const { id, yearId, schoolYearLevel, name } = req.query;

	// verify
	if(!id && !yearId && !schoolYearLevel && !name)
		return res.send('incomplet field');

	// set the arrayTyped
	const arrayTyped = 
		[['id', id], 
		['year_id', yearId],
		['school_year_level', schoolYearLevel],
		['name', name]];

	// get the result
	const result = await getTable({
		toSelect: '*',
		table: 'School_years',
		arrayTyped
	});

	return res.send(result);
};


module.exports = { cSchoolYear, uSchoolYear, rSchoolYear };

