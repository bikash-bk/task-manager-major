const mongoose = require('mongoose')


function ConnectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Databse connected successfully")
    })
    .catch((err)=>{
        console.log("Database connection error", err)
    })
}

module.exports = ConnectDB