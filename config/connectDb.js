const mongoose = require('mongoose') // import mongoose from 'mongoose'

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connect to MongoDb')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDb // export default connectDb

