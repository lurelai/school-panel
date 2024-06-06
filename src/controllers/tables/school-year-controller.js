const { createId } = require('../../services/work-id-service');

const createSchoolYear = async (req, res)=>{
	const { name, jLevel, year } = req.body;

	if(!name || !jLevel || !year)
		return res.send({type: 'err', body: 'incomplet field'});

	const { id } = await createId('school-years');


	return res.send('ok');
};

module.exports = { createSchoolYear };

