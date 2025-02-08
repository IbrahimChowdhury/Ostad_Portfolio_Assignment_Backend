import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            unique:true,
            required:true},
        content:String,
        image:String,
    },
    {
        timestamps:true,
        versionKey:false
    }
)

let Blogs=mongoose.model('Blogs',blogSchema)
export default Blogs;