const { adminValidation } = require('../../services/loginService')

const loginController = async (req, res)=>{
    const { admin, password } = req.body

    if(!admin)
        return res.send({msg: "You can't send request without the admin's field"})

    if(!password)
        return res.send({msg: "You can't send request without the password's field"})

    const result = await adminValidation(admin, password)
    console.log(result)

    if ( !result.ok )
        return res.send(result.err)

    return res.send('Logged')
}

module.exports = loginController

