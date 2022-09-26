import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import imgs from '../Images/pic6.jpg'

//type for states
interface UserAuth {
  email: string;
  password: string;
}
export default function Login() {
  //usestate
  const { register, handleSubmit } = useForm<UserAuth>();

  const onSubmit: SubmitHandler<UserAuth> = (data) => console.log(data);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2  ">
        <form className="md:m-10 md:p-10 p-2" onSubmit={handleSubmit(onSubmit)}>

          <div className="text-center p-6 text-2xl">
          <a
            href="/"
            className="items-center no-underline py-4 text-center mx-auto"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9 mx-auto "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl text-center  text-orange-600 font-semibold whitespace-nowrap dark:text-white">
              Log in
            </span>
          </a>
          </div>

          <div className="input p-2">
            <label>Email</label>
            <input
              type="email"
              {...register("email")}
              className="border border-slate-600"
              placeholder="Enter email"
            />
          </div>

          <div className="input p-2">
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              className="border border-slate-600"
              placeholder="Enter password"
            />
          </div>

          <p className="py-4 mx-auto text-center">
            Forgot Password ?{" "}
            <a
              className="text-orange-500 font-bold no-underline"
              href="/signup"
            >
              Click here
            </a>
          </p>

          <input
            className="bg-sky-700 p-2 my-4 hover:bg-sky-600 text-white"
            type="submit"
            value="Login"
          />

        <p className="py-2 mx-auto text-center">
            Don't have an account ?{" "}
            <a
              className="text-orange-500 font-bold no-underline"
              href="/signup"
            >
              Sign Up Here
            </a>
          </p>

        </form>

        <div className="bg-slate-100  p-4">
          <div className=" justify-center p-6 m-4 text-center">
            
              <img
                src={imgs}
                className="mr-3   mx-auto"
                alt="Flowbite Logo"
              />

              <div className="p-4">
              <h3 className="self-center p-4 text-2xl  text-orange-600 font-semibold whitespace-nowrap dark:text-white">
              Oakberry Estates
              </h3>
           
            <p className="p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quos facere tempora illo a, itaque modi aliquid ?
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
