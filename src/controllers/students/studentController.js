const { join } = require('path')
const { getGradeService } = require('../../services/studentService')

const yearsList = async (req, res)=>{
	return res.sendFile(join(__dirname, '../../../public/views/years-list.html'))
}

const gradeList = async (req, res)=>{
	const { year } = req.params
	// It's temporaly, i will use JWT token to validated it
	const { id } = req.query

	const { result, err, errFunction, queryTime } = await getGradeService(year, id)

	console.log(queryTime)

	if(err === 'Invalid path'){
	}

	return res.send(req.params)
}

module.exports = { yearsList, gradeList }

