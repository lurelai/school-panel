const mongoose = require('mongoose')

const connectDatabase = ()=>{
    console.log('Trying to connect...')
    const URI = 'mongodb+srv://privatelucasariel27:26ECGXA9FeOduyAa@cluster0.lrczr38.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connect(URI).
        then(()=>console.log('connected')).
        catch(error=>console.log(error))
}

module.exports = connectDatabase

