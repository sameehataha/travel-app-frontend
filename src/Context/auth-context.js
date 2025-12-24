import { createContext, useContext} from "react"
import { authReducer } from "../reducer"
import { useReducer } from "react"
const initialValue = {
    isAuthModalOpen: false,
    name: "",
    number: "",
    email:"",
    password: "",
    confirmPassword: "",
    accessToken:"",
    username1: "",
    selectedTab: "login"

}
const AuthContext = createContext(initialValue)
const AuthProvider = ({children}) => {
    const [{isAuthModalOpen,name,email,password,number,selectedTab , accessToken,username1, confirmPassword},authDispatch] = useReducer(authReducer,initialValue)
    return (
        <AuthContext.Provider value={{isAuthModalOpen,name,email,password,number,selectedTab,accessToken,username1,confirmPassword, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)
export {useAuth,AuthProvider}