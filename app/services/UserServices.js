import Users from "../models/Users.js";
import { TokenEncode } from "../utility/TokenHelper.js";

export const RegistrationServices = async (req) => {
    try {
        let body=req.body;
        let data= await Users.create(body);
        return {status:200,message:"User Created",data:data}

    } catch (error) {
        return {status:400,message:error.message}
    }
}



export const LoginServices = async (req) => {

    try {
        let body=req.body;
        console.log(body)
        let email=body.email;
        let password=body.password;
        console.log(email)
        let checkUser=await Users.findOne({email:email});
        console.log(checkUser)
        if(checkUser){
            if(checkUser.password===password){
                let token= TokenEncode(email);
                return {status:200,message:"Login Success",data:token}
            }
            else{
                return {status:400,message:"Invalid Password"}
            }
        }
    } catch (error) {
        return {status:400,message:error.message}
    }
}