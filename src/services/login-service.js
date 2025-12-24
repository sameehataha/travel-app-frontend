import axios from "axios"

export const loginHandler = async (number,password) => {
    try{
        const { data: { accessToken, username, ...rest } } = await axios.post("https://travel-app-backend-jrcu.onrender.com/api/auth/login" , {
            number:number, password:password 
        })
          console.log({accessToken, username})
        return { acessToken: accessToken, username1: username } 
    }catch(err){
       console.log("unable to login")
    }
}