const { query } = require('../database/db')

const adminRead = (name)=>{
    return new Promise(async (resolve, reject)=>{
        const result = await query(`SELECT name FROM admin`)
        const resultRows = result.rowCount

        if(resultRows === 0)
            return resolve({ok: null, err: "There's no admin's account"})

        return resolve({ok: 'ok', rows: result.rows, err: null})
    })
}

module.exports = { adminRead }

