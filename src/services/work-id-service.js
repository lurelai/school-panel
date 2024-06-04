const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 12 });

const createId = async (type)=>{
	const prefixs = {
		"years": "Y-"
	};
	const prefix = prefixs[type]

	if(type === 'years'){
		const start = Date.now();
		const id = prefix + randomUUID();
		const end = Date.now() - start;

		return { id, createIdTime: end + 'ms' };
	};

	return { id: false };
};

module.exports = { createId };

