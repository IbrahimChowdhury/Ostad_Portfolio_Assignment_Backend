import Teams from "../models/Teams.js";

export const CreateTeam = async (req) => {
    try {
        let body = req.body;
        let data = await Teams.create(body);
        return { status: 200, message: "Team Created", data: data }
    } catch (error) {
        return { status: 400, message: error.message }
    }
}

export const GetAllTeams=async(req)=>{
    try {
        let data= await Teams.find();
        return {status:200,message:"All Teams",data:data}
    } catch (error) {
        return {status:400,message:error.message}
    }
}

export const DeleteTeam=async(req)=>{
    try {
        let id=req.params.id;
        let data= await Teams.findByIdAndDelete(id);
        return {status:200,message:"Team Deleted",data:data}

    } catch (error) {
        return {status:400,message:error.message}
    }
}

export const UpdateTeam=async(req)=>{
    try {
        let id=req.params.id;
        let body=req.body;
        let data= await Teams.findByIdAndUpdate(id,body,{new:true});
        return {status:200,message:"Team Updated",data:data}
    }
    catch (error) {
        return {status:400,message:error.message}
    }
}
