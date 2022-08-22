import React, { useState } from "react";
import {useForm, SubmitHandler} from 'react-hook-form'

//type for states
interface UserAuth  {
  email: string;
  password: string;
};
export default function Login() {
  //usestate
  const {register, handleSubmit} = useForm<UserAuth>()
  
  const onSubmit: SubmitHandler<UserAuth> = data => console.log(data)
  
  return (
    <div className="wal">
      <form className="formz w-full md:w-2/5" onSubmit={handleSubmit(onSubmit)}>
        
          <h2 className="text-inherit text-center p-2 ">Login</h2>

          <div className="input">
            <label>Email</label>
            <input
              type="email"
              {...register('email')}
              
            />
          </div>

          <div className="input">
            <label>Password</label>
            <input
              type="password"
              {...register('password')}
            />
          </div>

          
            <input className="bg-sky-700 p-2 my-4 hover:bg-sky-600 text-white" type='submit' value='Login'/>
              
            

            <p>Don't have an account ?   <a className="text-white" href="/signup">Register</a></p>
           
         
       
      </form>
    </div>
  );
}
