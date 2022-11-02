const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const userSchema =new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    department:{
        type:String,
    },
    position:{
        type:String,
    },
    salary:{
        type:Number,
    },
    location:{
        type:String,
    },
})

module.exports = mongoose.model("User",userSchema);

