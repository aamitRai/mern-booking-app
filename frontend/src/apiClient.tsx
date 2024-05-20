import { RegisterFormData } from "./component/Signup";
import {API_BASE_URL} from "../env";
import { loginFormData } from "./component/Signin";

export const signup = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(formData)
  });
  const responseBody=await response.json();
  if(!response.ok){     //it means if the status code between 200-299
    throw new Error(responseBody.message)
  } 
};


export const signin=async (formData:loginFormData)=>{
    const response=await fetch(`${API_BASE_URL}/auth/signin`,{
        method:"POST",  
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify(formData)  
    });
    const responseBody=await response.json();
    if(!response.ok){
    throw new Error(responseBody.message)
    }
}
