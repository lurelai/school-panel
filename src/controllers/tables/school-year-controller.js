const { createId } = require('../../services/work-id-service');
const { insertSchoolYear, updateSchoolYear } = require('../../services/tables/school-year-service');

// create school year
const cSchoolYear = async (req, res)=>{
	const { name, jLevel, year_id } = req.body;

	if(!name || !jLevel || !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	const { id } = await createId('school-years');

	const result = await insertSchoolYear(id, name, jLevel, year_id);

	return res.send('ok');
};

// update school year
const uSchoolYear = async (req, res)=>{
	const { id, name, year_id } = req.body;

	if(!name && !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	let info = null;

	if(name && !year_id)
		info = [name, 'year_id', id];

	await updateSchoolYear(info);

	return res.send("Ok");
};

module.exports = { cSchoolYear, uSchoolYear };

