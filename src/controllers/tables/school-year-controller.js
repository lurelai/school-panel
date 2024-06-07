const { createId } = require('../../services/work-id-service');
const { insertSchoolYear } = require('../../services/tables/school-year-service');

const createSchoolYear = async (req, res)=>{
	const { name, jLevel, year_id } = req.body;

	if(!name || !jLevel || !year_id)
		return res.send({type: 'err', body: 'incomplet field'});

	const { id } = await createId('school-years');

	const result = await insertSchoolYear(id, name, jLevel, year_id);

	return res.send('ok');
};

module.exports = { createSchoolYear };

