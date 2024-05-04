"use client";
import React from "react";
import FromLogin from "./component/IFormLogin/FromLogin";
import LoginByIns from "./component/byInstagram/LoginByIns";

const Login = () => {
  return (
    <div className="w-96 mx-auto h-screen flex  justify-center  items-center flex-col gap-3 pb-2 ">
      <div>Sign in by account</div>
      <FromLogin />
      <div className="text-[10px]">Forgot password ?</div>
      <div className="w-48 text-center border-b-[1px] border-black leading-[0.1rem] mx-0 mt-[10px] mb-[20px]">
        <span className="text-[14px] bg-[#fff] px-[10px] py-0">or</span>
      </div>
      <LoginByIns />
      <div className="w-72  text-[8px] w-48 flex flex-row justify-between font-semibold">
        <div> © 2024 </div>
        <div> Threads Terms</div>
        <div> Privacy Policy</div>
        <div> Cookies Policy</div>
        <div> Report a problem</div>
      </div>
    </div>
  );
};

export default Login;
