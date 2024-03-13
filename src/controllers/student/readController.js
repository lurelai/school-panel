const { studentRead } = require('../../services/readService')

const readController = async (req, res)=>{
    const query = req.query

    await studentRead(query)

    if(query.password)
        return res.send("You can't filter students by password")

    return res.send(query)
}

module.exports = readController
