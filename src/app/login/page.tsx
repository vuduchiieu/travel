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
      <ModelLogin loginPage={loginPage} />
      <ul className="fixed bottom-5 w-[522px] flex items-center justify-between">
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          © 2024
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Threads Terms
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Privacy Policy
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Cookies Policy
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Report a problem
        </li>
      </ul>
    </div>
  );
};

export default Login;
