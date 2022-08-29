import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import imgs from '../Images/pic7.jpg'

//type for states
interface UserAuth {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  //usestate
  //requiring the methods from useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuth>();

  const onSubmit: SubmitHandler<UserAuth> = (data) => console.log(data);

  return (
    <div className="">
      <section className="grid grid-cols-1 md:grid-cols-2  ">
        <form className="md:m-8 md:p-6 p-2" onSubmit={handleSubmit(onSubmit)}>
          <a
            href="https://flowbite.com/"
            className="flex items-center no-underline py-2"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9 "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl  text-orange-600 font-semibold whitespace-nowrap dark:text-white">
              Register
            </span>
          </a>

          <div>
            <p>
              Already have an Account ?{" "}
              <a href="/login" className="text-orange-500 font-bold no-underline">
                Login here
              </a>
            </p>
          </div>
          <div className="input">
            <label>Full Name</label>
            <input
              type="text"
              {...register("name", { required: "This is required" })}
              className="border border-slate-600" placeholder="Enter fullname"
            />
            <p className="text-red-600"> {errors.name?.message} </p>
          </div>

          <div className="input">
            <label>UserName</label>
            <input
              className="border border-slate-600"
              type="text"
              {...register("username", { required: "This is required" })} placeholder="Enter username"
            />
            <p className="text-red-600">{errors.username?.message}</p>
          </div>

          <div className="input">
            <label>Email</label>
            <input
              className="border border-slate-600"
              type="email"
              {...register("email", { required: true })} placeholder="Enter email"
            />
            <p className="text-red-600"> {errors.email?.message} </p>
          </div>

          <div className="input">
            <label>Password</label>
            <input
              className="border border-slate-600"
              type="password"
              {...register("password", { required: "Password required" })} placeholder="Enter password"
            />
            <p className="text-red-600"> {errors.password?.message} </p>
          </div>

          <div className="input">
            <label>Confirm Password</label>
            <input
              className="border border-slate-600"
              type="password"
              {...register("confirmPassword", { required: "required" })} placeholder="Enter password again"
            />
            <p className="text-red-600"> {errors.confirmPassword?.message} </p>
          </div>

          <div className="input">
            <input
              className=" bg-sky-700 p-2 my-4 hover:bg-sky-600 text-white"
              type="Submit"
              placeholder="Register"
              name="register"
            />
          </div>
        </form>

        <div className="bg-slate-100  p-4">
          <div className=" justify-center p-6 text-center">
            
           
              <img
                src={imgs}
                className="mr-3  mx-auto"
                alt="Flowbite Logo"
              />

              <div className="p-4 m-4">
              <span className="self-center text-2xl  text-orange-600 font-semibold whitespace-nowrap dark:text-white">
              Oakberry Estates
              </span>
          
            <p>
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
