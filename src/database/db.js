const mongoose = require('mongoose')
require('dotenv').config()

const connectDatabase = ()=>{
    console.log('Trying to connect...')
    const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lrczr38.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(URI).
        then(()=>console.log('connected')).
        catch(error=>console.log(error))
}

module.exports = connectDatabase

