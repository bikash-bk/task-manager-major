const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,

    },
    priority:{
        type:String,
        enum:["Low" , "Medium" , "High"],
        default:"Low"
    },
    status:{
        type:String,
        enum:["Pending" , "In Progress" , "Completed"],
        default:"Pending"
    },
    deuDate:{
        type:Date,
        required:true
    },
    assignedTo:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    ],

    createdBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],

    attachment:[
        {
            type:String,
        }
    ],

    todoCheckList:[todoSchema],

    progress:{
        type:Number,
        default:0
    }


    
    
},{
    timestamps:true
})

const Task = mongoose.model("Task" , TaskSchema)

module.exports= Task