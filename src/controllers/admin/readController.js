const { adminRead } = require('../../services/readService')

const readController = async (req, res)=>{
    const result = await adminRead()

    if(!result.ok)
        return res.send(result.err)

    return res.send(result.rows)
}

module.exports = readController

