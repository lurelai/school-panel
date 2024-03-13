const { query } = require('../database/db')

const adminRead = (obj)=>{
    return new Promise(async (resolve, reject)=>{
        const objectLength = Object.keys(obj).length
        let result = null

        if(objectLength === 0)
            result = (await query("SELECT year FROM classes")).rows

        if(objectLength === 1)
            result = (await query("SELECT json_object_keys(school_years) AS school_years FROM classes WHERE year=$1", [obj.year])).rows

        if(objectLength === 2)
            result = (await query("SELECT json_object_keys(school_years -> $1) AS class from classes WHERE year=$2", [obj.schoolYear, obj.year])).rows

        if(objectLength === 3){

        }

        return resolve({ok: 'ok', result, err: null})
    })
}

module.exports = { adminRead }

