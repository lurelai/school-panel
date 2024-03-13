const { query } = require('../database/db')

const adminRead = (obj)=>{
    return new Promise(async (resolve, reject)=>{
        const objectLength = Object.keys(obj).length

        if(objectLength === 0){
            const result = await query("SELECT json_object_keys(school_years) AS year FROM classes")
            return resolve({ok: 'ok', rows: result.rows})
        }

        return resolve({ok: 'ok'})
    })
}

module.exports = { adminRead }

