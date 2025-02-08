import Blogs from "../models/Blogs.js";

export const CreateBlog=async(req)=>{
    try {
        let body=req.body;
        let data= await Blogs.create(body);
        return {status:200,message:"Blog Created",data:data}
    } catch (error) {
        return {status:400,message:error.message}
    }
}


export const GetSingleBlog=async(req)=>{
    try {
        let id=req.params.id;
        let data= await Blogs.findById(id);
        return {status:200,message:"Blog Found",data:data}

    } catch (error) {

        return {status:400,message:error.message}
    }
}

export const GetAllBlogs=async(req)=>{
    try {
        let data= await Blogs.find();
        return {status:200,message:"All Blogs",data:data}
    } catch (error) {
        return {status:400,message:error.message}
    }
}

export const UpdateBlog=async(req)=>{
    try {
        let id=req.params.id;
        let body=req.body;
        let data= await Blogs.findByIdAndUpdate(id,body,{new:true});
        return {status:200,message:"Blog Updated",data:data}
    }
    catch (error) {
        return {status:400,message:error.message}
    }
}

export const DeleteBlog=async(req)=>{
    try {
        let id=req.params.id;
        let data= await Blogs.findByIdAndDelete(id);
        return {status:200,message:"Blog Deleted",data:data}
    } catch (error) {
        return {status:400,message:error.message}
    }
}

