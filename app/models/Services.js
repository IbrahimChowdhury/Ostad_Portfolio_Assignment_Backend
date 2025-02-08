import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema(
    {
        name:String,
        description:String,
        image:String
    },
    {
        timestamps:true,
        versionKey:false
    }
)

let Services=mongoose.model('Services',serviceSchema)

export default Services;