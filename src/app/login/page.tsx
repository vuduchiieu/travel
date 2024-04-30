"use client";
//chua lam cai catch errror
import React from "react";
import { useForm } from "react-hook-form";

interface IFormLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormLogin>();
  const onSubmit = (d: any) => {
    console.log(d);
  };
  return (
    <div className="w-96 mx-auto h-screen flex  justify-center  items-center flex-col gap-2 pb-2 ">
      <div>Sign in by account</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col items-center gap-2 justify-around"
        action=""
      >
        <input
          className="w-48 outline-double outline-cyan-500 text-xs pl-1.5 rounded-sm"
          type="text"
          placeholder="Type your account"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Email must be correctly",
            },
          })}
        />
        <input
          className="w-48 outline-double outline-cyan-500 text-xs pl-1.5 rounded-sm"
          type="password"
          placeholder="Type your password"
          {...register("password", { required: "password is required" })}
        />
        <button className="w-48 h-6 bg-cyan-300 text-xs text-white rounded-2xl">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
