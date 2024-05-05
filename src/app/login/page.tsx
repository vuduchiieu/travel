import FromLogin from "@/component/Login/IFormLogin/FromLogin";
import LoginByIns from "@/component/Login/byInstagram/LoginByIns";
import React from "react";

const Login = () => {
  return (
    <div className="w-100 mx-auto h-screen flex  justify-center  items-center flex-col gap-3 pb-2 bg-[#101010]">
      <img
        className="z-0 absolute p-0 top-0"
        width="1200"
        height="300"
        src="https://static.cdninstagram.com/rsrc.php/yC/r/jxB9GUOHTf2.webp"
        alt="bg"
      />
      <div>
        <b className="text-white">Log in with your Instagram account</b>
      </div>
      <FromLogin />
      <div className="text-[10px] text-white">Forgot password ?</div>
      <div className="w-96 text-center border-b-[1px] border-white leading-[0.1rem] mx-0 mt-[10px] mb-[20px]">
        <span className="text-[14px] text-white px-[10px] py-0 bg-[#101010]">
          or
        </span>
      </div>
      <LoginByIns />
      <div className="text-white text-[8px] w-96 flex flex-row justify-between font-semibold">
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
