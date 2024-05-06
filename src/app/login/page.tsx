import ModelLogin from "@/components/Models/ModelLogin";
import React from "react";

const Login = () => {
  const loginPage = true;
  return (
    <div className="relative z-[0] w-100 mx-auto h-screen flex  justify-center  items-center flex-col gap-3 pb-2 bg-[#fff]">
      <img
        className="fixed top-0 left-0 z-[-1]"
        src="https://static.cdninstagram.com/rsrc.php/yC/r/jxB9GUOHTf2.webp"
        alt="bg"
      />
      <div>
        <b className="text-white">Log in with your Instagram account</b>
      </div>
      <ModelLogin loginPage={loginPage} />
      <ul className="fixed bottom-5 text-[#999] text-[12px]  w-[522px] flex flex-row justify-between font-normal">
        <li> © 2024 </li>
        <li> Threads Terms</li>
        <li> Privacy Policy</li>
        <li> Cookies Policy</li>
        <li> Report a problem</li>
      </ul>
    </div>
  );
};

export default Login;
