const mongoose = require('mongoose')
const { Schema } = mongoose

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    relativesName: {
        father: {
            type: String
        },

        mother: {
            type: String
        },

        others: {
            type: String
        }
    }
})

const Student = mongoose.model('students', StudentSchema)

module.exports = Student;

