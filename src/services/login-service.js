import axios from "axios"
import { API_ENDPOINTS } from "../config/api"
export const loginHandler = async (number,password) => {
    try{
        const { data: { accessToken, username, ...rest } } = await axios.post(API_ENDPOINTS.login, {
            number:number, password:password 
        })
          console.log({accessToken, username})
        return { acessToken: accessToken, username1: username } 
    }catch(err){
       console.log("unable to login")
    }
}