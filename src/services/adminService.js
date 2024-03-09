const { query } = require('../database/db.js')

const verify = ()=>{
    return new Promise(async (resolve, reject)=>{
        const result = await query("SELECT * FROM admin") 

        resolve({result: result.rows})
    })
}

module.exports = { verify }

