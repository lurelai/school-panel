const { query } = require('../database/db')

const adminRegister = (name, pass)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await query(`INSERT INTO admin VALUES($1, $2)`, [name, pass])

            resolve({ok: 'ok', err: null})
        }catch(err){
            if(err.code === '23505')
                return resolve({ok: null, err: 'This name already exist'})

            return resolve({ok: null, err})
        }
    })
}

const studentRegister = (name, age, pass)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await query(`INSERT INTO 
                students(student_name, student_age, student_password) VALUES($1, $2, $3)`, [name, age, pass])

            return resolve({ok: 'ok', err: null})

        }catch(err){
            if(err.code === '23505')
                return resolve({ok: null, err: "There's something wrong with this input. Please, try again"})

            return resolve({ok: null, err})
        }

        return resolve({ok: 'ok'})
    })
}

const teacherRegister = (name, age, pass)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await query(`INSERT INTO 
                teachers(teacher_name, teacher_age, teacher_password) VALUES($1, $2, $3)`, [name, age, pass])

            return resolve({ok: 'ok', err: null})
        }catch(err){
            if(err.code === '23505')
                return resolve({ok: null, err: "There's something wrong with this input. Please, try again"})

            return resolve({ok: null, err})
        }

        return resolve({ok: 'ok'})
    })
}

module.exports = { adminRegister, studentRegister, teacherRegister }

