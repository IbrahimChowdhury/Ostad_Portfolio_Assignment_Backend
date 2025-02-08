import mongoose from "mongoose";
const teamSchema= new mongoose.Schema(
    {
        name:String,
        position:String,
        image:String
    },
    {
        timestamps:true,
        versionKey:false
    }
)

let Teams=mongoose.model('Teams',teamSchema)

export default Teams;