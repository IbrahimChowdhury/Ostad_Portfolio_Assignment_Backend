import * as UserService from '../services/UserServices.js';

export const Registration = async (req, res) => {
    let result = await UserService.RegistrationServices(req);
    res.status(result.status).json(result);
}


export const Login = async (req, res) => {
    try {
        let result = await UserService.LoginServices(req);
        if(result.status===200){
            let cookie_option={
                expires: new Date(Date.now() + 24*60*60*1000),
                httpOnly:true
            }
            res.cookie('token',result.data,cookie_option)
            
           return res.status(result.status).json(result);
        }
        else{
            return res.status(result.status).json(result);
        }
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
  
}