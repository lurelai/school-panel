const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 12 });

const createId = async (type)=>{
	if(type === 'years'){
		const start = Date.now();
		const ID = 'Y-' + randomUUID();
		const end = Date.now() - start;

		return { ID, createIdTime: end + 'ms' };
	};

	return { ID: false };
};

module.exports = { createId };

