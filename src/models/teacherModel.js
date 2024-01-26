const mongoose = require('mongoose')
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    avaliation: {
        type: Number
    }
})

const Teacher = mongoose.model('teachers', TeacherSchema)

module.exports = Teacher;

