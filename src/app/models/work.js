import mongoose, { Schema } from "mongoose";

const WorkSchema=new Schema({
    title:{
        type:String,
        required:[true, "Title Required !!"]
    },
    description:{
        type:String,
        required:[true, "Description Required !!"]
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        default:"pending"
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }


})

export const Work=mongoose.models.works || mongoose.model("works", WorkSchema);