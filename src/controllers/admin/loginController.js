const { verify } = require('../../services/adminService')

const loginController = async (req, res)=>{
    const { admin, password } = req.body

    if(!admin)
        return res.send({msg: "Admin's name not founded"})

    if(!password)
        return res.send({msg: "Admin's password not founded"})

    return res.send('Logged')
}

module.exports = loginController

