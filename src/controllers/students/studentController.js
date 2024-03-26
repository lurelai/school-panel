const yearsListController = async (req, res)=>{
	return res.send('years list controller (welcome)')
}

const gradeListController = async (req, res)=>{
	return res.send('grade list controller (welcome)')
}

module.exports = { yearsListController, gradeListController }

