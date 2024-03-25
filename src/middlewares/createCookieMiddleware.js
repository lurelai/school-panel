const { createCookieService } = require('../services/studentService')

const createStudentCookieMiddleware = async (req, res, next)=>{
	// It's temporaly, after, i will use a JWT to storage the ID
	const { result, queryTime } = await createCookieService(req.query.id)

	if(typeof result === 'string')
		res.set("Set-Cookie", "route=NR")

	else
		res.set('Set-Cookie', `route=${JSON.stringify(result)}`)

	console.log(`Set cookie query time: ${queryTime}ms`)
	next()
}

module.exports = createStudentCookieMiddleware

