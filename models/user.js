const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('users',userSchema)