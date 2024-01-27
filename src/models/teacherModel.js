const mongoose = require('mongoose')
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true
    },

    avaliation: {
        type: Number
    },

    importanceValue: {
        type: Number, // 1~3 \\ 1=Admin, 2=Can find and alterate values at students db, 3=just are able to view infos
        required: true,
    }
})

const Teacher = mongoose.model('teachers', TeacherSchema)

module.exports = Teacher;

