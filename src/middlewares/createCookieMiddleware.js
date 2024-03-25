const { getYearsService } = require('../services/studentService')

const createStudentCookieMiddleware = async (req, res, next)=>{
	const cookie = req.header('cookie')

	// verify if there's any cookie
	if(cookie){
		// if there's, split and try to search for the 'year=' to verify if it's valid'
		const index = cookie.split(';').findIndex(element=>{ 
			return element.includes('years=[') 
		})

		// If different of -1, it's valid
		if(index !== -1)
			return next()
	}

	// It's temporaly; after, i will use a JWT to storage the ID
	const { result, queryTime } = await getYearsService(req.query.id)

	// Verify if it's a string (it's only a string when don't have any year to search for)
	if(typeof result === 'string')
		res.set("Set-Cookie", "years=NY")

	else
		res.set('Set-Cookie', `years=${JSON.stringify(result)}`)

	// Log query time
	console.log(`Set cookie query time: ${queryTime}ms`)
	return next()
}

module.exports = createStudentCookieMiddleware

