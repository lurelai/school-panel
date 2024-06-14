const { createId } = require('../../services/work-id-service');
const insertTable = require('../../services/insert-table-service');

const cSubject = async (req, res)=>{
	const { name, status, yearAdded } = req.body;

	if(!name || !yearAdded || !status)
		return res.send({ type: 'err', body: 'incomplet field' });

	const { id } = await createId('subjects');

	const result = await insertTable("subjects(id, name, status, year_added)", [id, name, status, yearAdded]);

	return res.send(result);
};

module.exports = { cSubject };

