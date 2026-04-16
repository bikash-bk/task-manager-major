const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    ProfileImageUrl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
    },

    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }


},
{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

module.exports = User