const yearsList = async (req, res)=>{
	return res.send('Year list')
}

const schoolYearAndClassList = async (req, res)=>{
	return res.send(req.params)
}

const gradeList = async (req, res)=>{
	return res.send(req.params)
}

module.exports = { yearsList, schoolYearAndClassList, gradeList }

