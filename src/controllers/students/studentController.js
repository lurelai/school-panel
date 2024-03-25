const { getGradeService } = require('../../services/studentService')

const yearsList = async (req, res)=>{
	return res.send('Year list')
}

const gradeList = async (req, res)=>{
	const { year } = req.params
	// It's temporaly, i will use JWT token to validated it
	const { id } = req.query

	await getGradeService(year, id)

	return res.send(req.params)
}

module.exports = { yearsList, gradeList }

