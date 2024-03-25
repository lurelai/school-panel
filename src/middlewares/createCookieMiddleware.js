const { getRouteService } = require('../services/studentService')

const createStudentCookieMiddleware = async (req, res, next)=>{
	const cookie = req.header('cookie')

	// verify if there's any cookie
	if(cookie){
		// if there's, split and try to search for the 'route=[{; to verify if it's valid'
		const index = cookie.split(';').findIndex(element=>{ 
			return element.includes('route=[{') 
		})

		// If different of -1, it's valid
		if(index !== -1)
			return next()
	}

	// It's temporaly; after, i will use a JWT to storage the ID
	const { result, queryTime } = await getRouteService(req.query.id)

	if(typeof result === 'string')
		res.set("Set-Cookie", "route=NR")

	else
		res.set('Set-Cookie', `route=${JSON.stringify(result)}`)

	console.log(`Set cookie query time: ${queryTime}ms`)
	return next()
}

module.exports = createStudentCookieMiddleware

