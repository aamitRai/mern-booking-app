import { useForm, useWatch } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
export type RegisterFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword:string
};


export const Signup = () => {
  const mutation=useMutation(apiClient.signup,{
    onSuccess:()=>{
      console.log("register success")
    },
    onError:(error:Error)=>{
      console.log("register Unsuccessful ",error)
    }
  })
  const { register,watch ,handleSubmit, formState:{errors}} = useForm<RegisterFormData>();
  const MyFormSubmit=handleSubmit((data)=>{
      mutation.mutate(data);
    });
  
  return (
    <>
      <div >
        <form className="flex flex-col " onSubmit={MyFormSubmit}>
        <h1 className="text-3xl font-bold ">Create an Account</h1>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="text-gray-700 text-sm font-bold flex-1 ">
            First Name
            <input
              className="w-full border rounded w-full   py-1 px-2 font-normal"
              {...register("firstName", { required: "The field is required" })}
            ></input>
            {
              errors.firstName &&(<span className="text-red-500">{errors.firstName.message}</span>)
            }
          </label>
          <label className="text-gray-700 text-sm font-bold  flex-1">
            Last Name
            <input
              className="w-full border rounded w-full   py-1 px-2 font-normal"
              {...register("lastName", { required: "The field is required" })}
            ></input>
            {
              errors.lastName &&(<span className="text-red-500">{errors.lastName.message}</span>)
            }
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="text-gray-700 text-sm font-bold flex-1 ">
            Mail ID
            <input type="email"
              className="w-full border rounded w-full   py-1 px-2 font-normal"
              {...register("email", { required: "The field is required" })}
            ></input>
            {
              errors.email &&(<span className="text-red-500">{errors.email.message}</span>)
            }
          </label>
         </div>
          <div className="flex flex-col md:flex-row gap-5">
         
          <label className="text-gray-700 text-sm font-bold  flex-1">
            Password
            <input type="password"
              className="w-full border rounded w-full   py-1 px-2 font-normal"
              {...register("password", 
              { required: "The field is required",
                minLength:{
                      value:6,
                      message:"password must be at least 6 characters"
                } })}
            ></input>
            {
              errors.password &&(<span className="text-red-500">{errors.password.message}</span>)
            }
          </label>
         </div>
          <div className="flex flex-col md:flex-row gap-5">
         
          <label className="text-gray-700 text-sm font-bold  flex-1">
           Confirm Password
            <input type="password"
              className="w-full border rounded w-full   py-1 px-2 font-normal"
              {...register("confirmPassword", 
              { required: "The field is required",
                validate:(val)=>{
                  if(!val){
                    return "This fields is required"
                  }else if(watch("password")!==val){
                    return "Password is not matched"
                    
                  }
                  

                }
                 })}
            ></input>
            {
              errors.confirmPassword &&(<span className="text-red-500">{errors.confirmPassword.message}</span>)
            }
          </label>
        </div>
        <div className="flex flex-col md:flex-row place-content-center gap-5">
          <button type="submit"   className="font-bold  hover:text-white">Create Account</button>
         </div>
         </form>
      </div>
    </>
  );
};
