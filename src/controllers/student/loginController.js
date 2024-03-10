const { studentValidation } = require('../../services/loginService')

const loginController = async (req, res)=>{
    const { id, pass } = req.body

    if(!id)
        return res.send("You can't send request without the id field")

    if(!pass)
        return res.send("You can't send request without the pass field")

    const result = await studentValidation(id, pass)

    if(!result.ok)
        return res.send(result.err)

    return res.send('Logged')
}

module.exports = loginController

