import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";

export type loginFormData = {
  email: string;
  password: string;
};

export const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>();

  const mutation=useMutation(apiClient.signin,{
        onSuccess:()=>{
            console.log("signin success")
      },
      onError:(error:Error)=>{
        console.log("signin Unsuccessful ",error)
      }
    })
  const handleSigninFormSubmit = handleSubmit((data) => {
    
    mutation.mutate(data);
    console.log("signin", data);
  });
  return (
    <>
      <div className="bg-sky-600">
        <h1>Sign in</h1>

        <form onSubmit={handleSigninFormSubmit}>
          <div className="flex flex-col md:flex-row gap-5">
            <label className="text-gray-700 text-sm font-bold flex-1 ">
              Mail ID
              <input
                type="email"
                className="w-full border rounded w-full   py-1 px-2 font-normal"
                {...register("email", { required: "The field is required" })}
              ></input>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <label className="text-gray-700 text-sm font-bold  flex-1">
              Password
              <input
                type="password"
                className="w-full border rounded w-full   py-1 px-2 font-normal"
                {...register("password", {
                  required: "The field is required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters",
                  },
                })}
              ></input>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
          </div>
          <div className="flex flex-col md:flex-row place-content-center gap-5">
            <button type="submit" className="font-bold  hover:text-white">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
