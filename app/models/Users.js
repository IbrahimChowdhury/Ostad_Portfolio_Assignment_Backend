import mongoose  from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            unique:true,
            lowercase:true,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

let Users=mongoose.model('Users',userSchema)
export default Users;