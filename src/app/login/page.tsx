"use client";
//chua lam cai catch errror
import React from "react";
import IFromLogin from "./component/IFormLogin/IFromLogin";

const Login = () => {
  return (
    <div className="w-96 mx-auto h-screen flex  justify-center  items-center flex-col gap-2 pb-2 ">
      <div>Sign in by account</div>
      <IFromLogin />
    </div>
  );
};

export default Login;
