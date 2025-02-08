import { JWT_EXPIRE_TIME,JWT_KEY } from "../config/config.js"
import jwt from 'jsonwebtoken';

export const TokenEncode=(email)=>{
    const KEY=JWT_KEY;
    const EXPIRE=JWT_EXPIRE_TIME;
    const PAYLOAD={
        email:email,
    }
    return jwt.sign(PAYLOAD,KEY,{expiresIn:EXPIRE})
}



export const TokenDecode=(token)=>{
   try{
    const KEY=JWT_KEY;
    return jwt.verify(token,KEY)
   }catch(err){
       return null
   }
}