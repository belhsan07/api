const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName:{type:String},
    email:{type:String},
})

module.exports = mongoose.model('User',userSchema)