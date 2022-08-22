import React  from "react";
import { useForm, SubmitHandler } from "react-hook-form";

//type for states
interface UserAuth {
  name: string ;
  username: string ;
  email: string ;
  password: string ;
  confirmPassword: string ;
}

export default function Signup() {
  //usestate
  //requiring the methods from useForm
  const { register, handleSubmit, formState: {errors} } = useForm<UserAuth>();

 
 const onSubmit: SubmitHandler<UserAuth> = data => console.log(data)
  
  return (
    <div className="wal">
      <form className="formz w-full md:w-2/5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-inherit text-center p-2 ">Register</h2>

        <div className="input">
          <label>Full Name</label>
          <input type="text" {...register("name", {required:"This is required"})} />
          <p className="text-red-600"> {errors.name?.message} </p>
        </div>

        <div className="input">
          <label>UserName</label>
          <input type="text" {...register("username", {required: "This is required"})} />
         <p className="text-red-600">{errors.username?.message}</p>
        </div>

        <div className="input">
          <label>Email</label>
          <input type="email" {...register("email", {required: true})} />
          <p className="text-red-600"> {errors.email?.message} </p>
        </div>

        <div className="input">
          <label>Password</label>
          <input type="password" {...register("password", {required: 'Password required'
           })} />
           <p className="text-red-600"> {errors.password?.message} </p>
        </div>

        <div className="input">
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword", {required: "required"})} />
          <p className="text-red-600"> {errors.confirmPassword?.message} </p>
        </div>

        <div className="input">
        <input className=" bg-sky-700 p-2 my-4 hover:bg-sky-600 text-white" type="Submit" placeholder="Register" name="register"/>
         
        
        </div>
       
        <div>
        <p>Have an Account ?   <a href="/login" className="text-white">Login</a></p>
       
        </div>
        
      </form>
    </div>
  );
}
