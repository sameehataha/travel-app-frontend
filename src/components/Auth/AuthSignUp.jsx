import { useAuth } from "../../Context";
import  {validateName ,validateEmail, validatePassword, validateNumber}  from "../../utils"
import {signupHandler} from "../../services"
let  isNumberValid, isNameValid,isEmailValid, isPasswordValid, isConfirmPasswordValid
export const AuthSignup = () => {
   const { name,email,password,number, authDispatch,confirmPassword} = useAuth()
   console.log({name,email,password,number, authDispatch,confirmPassword})
    const handlePhoneNumber = (event) => {
     isNumberValid = validateNumber(event.target.value)
        if (isNumberValid){
        console.log("valid input")
         authDispatch({
        type: "PHONE_NUMBER",
        payload: event.target.value
      })
        }else{
            console.log("invalid no")
        }
      
    }
     const handleNameChange = (event) => {
     isNameValid = validateName(event.target.value)
    if(isNameValid){
        console.log("valid input")
        authDispatch({
        type: "NAME",
        payload: event.target.value
      })
    }else{
            console.log("invalid name")
        }
     
    }
     const handleEmailChange = (event) => {
      isEmailValid = validateEmail(event.target.value)
     if(isEmailValid){
        console.log("valid input")
        authDispatch({
        type: "EMAIL",
        payload: event.target.value
      })
     }else{
            console.log("invalid password")
        }
     
    }
     const handlePasswordChnage = (event) => {
     isPasswordValid = validatePassword(event.target.value)
    if(isPasswordValid) {
        console.log("valid input")
    authDispatch({
        type: "PASSWORD_CHANGE",
        payload: event.target.value
      })
    }else{
            console.log("invalid confiorm password")
        }
      
    }
      const handleConfirmPasswordChnage = (event) => {
      isConfirmPasswordValid = validatePassword(event.target.value)
     if(isConfirmPasswordValid){
        console.log("valid input")
        authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value
      })
     }
   
    }
    const handleSubmitBtn = (event) => {
        console.log("clicked")
        console.log({isNumberValid,isNameValid,isEmailValid,isPasswordValid,isConfirmPasswordValid})
        event.preventDefault()
        if (isNumberValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
            signupHandler(name,number,email,password)
        }
        authDispatch({
            type: "CLEAR_USER_DATA"
        })
    }
    return (
      <form onSubmit={handleSubmitBtn}>
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Mobile Number <span className="text-danger">*</span>
          </label>
          <input defaultValue={number} type="tel" maxLength="10" className="form-control" placeholder="Enter Mobile Number" required onChange={handlePhoneNumber}/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Name <span className="text-danger">*</span>
          </label>
          <input defaultValue={name} className="form-control" placeholder="Enter name" required onChange={handleNameChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Email <span className="text-danger">*</span>
          </label>
          <input defaultValue={email} type="email" className="form-control" placeholder="Enter Email" required onChange={handleEmailChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Password <span className="text-danger">*</span>
          </label>
          <input defaultValue={password}  type="password" className="form-control" placeholder="Enter Password" required  onChange={handlePasswordChnage}/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">
           Confrim Password <span className="text-danger">*</span>
          </label>
          <input defaultValue={confirmPassword} type="password" className="form-control" placeholder="Enter Password" required  onChange={handleConfirmPasswordChnage}/>
        </div>
        <button type="submit" className="btn btn-danger w-100 text-white fw-semibold mb-3">
         Submit
        </button>
      </form>
    );
}