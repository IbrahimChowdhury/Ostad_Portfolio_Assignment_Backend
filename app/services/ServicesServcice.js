import Services from "../models/Services.js";

export const CreateService = async (req) => {
    try {
        let body = req.body;
        let data = await Services.create(body);
        return { status: 200, message: "Service Created", data: data }
    } catch (error) {
        return { status: 400, message: error.message }
    }
}

export const GetAllServices=async(req)=>{
    try {
        let data= await Services.find();
        return {status:200,message:"All Services",data:data}
    } catch (error) {
        return {status:400,message:error.message}
    }
}

export const DeleteService=async(req)=>{
    try {
        let id=req.params.id;
        let data= await Services.findByIdAndDelete(id);
        return {status:200,message:"Service Deleted",data:data}
    } catch (error) {
        return {status:400,message:error.message}
    }
}


export const UpdateService=async(req)=>{
    try {
        let id=req.params.id;
        let body=req.body;
        let data= await Services.findByIdAndUpdate(id,body,{new:true});
        return {status:200,message:"Service Updated",data:data}
    }
    catch (error) {
        return {status:400,message:error.message}
    }
}
