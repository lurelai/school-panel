const { createId } = require('../../services/work-id-service');
const { insertSchoolYear, updateSchoolYear } = require('../../services/tables/school-year-service');

// create school year
const cSchoolYear = async (req, res)=>{
	const { name, jLevel, year_id } = req.body;

	if(!name || !jLevel || !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	const { id } = await createId('school-years');

	const result = await insertSchoolYear(id, name, jLevel, year_id);

	return res.send(result)
};

// update school year
const uSchoolYear = async (req, res)=>{
	const { id, name, yearId, jLevel } = req.body;

	if( !id || (!name && !yearId && !jLevel))
		return res.send({type: 'err', body: 'incomplet field'});

	const values = [id];
	let queryString = "UPDATE School_years SET ";

	let i = 1;

	[['name', name], ['year_id', yearId], ['j_level', jLevel]].forEach((e) => {
		if(!e[1])
			return false;

		values.push(e[1]);

		queryString += `${e[0]}=$${i+1},`;
		i++;
	});

	queryString = queryString.slice(0, queryString.length - 1);
	queryString += " WHERE id=$1";

	const result = await updateSchoolYear(queryString, values);

	return res.send(result);
};

module.exports = { cSchoolYear, uSchoolYear };

