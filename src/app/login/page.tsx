import FromLogin from "@/components/Login/IFormLogin/FromLogin";
import LoginByIns from "@/components/Login/byInstagram/LoginByIns";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="relative z-[0] w-100 mx-auto h-screen flex  justify-center  items-center flex-col gap-3 pb-2 bg-[#101010]">
      <img
        className="fixed top-0 left-0 z-[-1]"
        src="https://static.cdninstagram.com/rsrc.php/yC/r/jxB9GUOHTf2.webp"
        alt="bg"
      />
      <div>
        <b className="text-white">Đăng nhập</b>
      </div>
      <FromLogin />
      <div className="w-[40vh] flex items-center justify-around">
        <div className="text-[13px] text-white">
          <Link href="/acount/password/reset"> Quên mật khẩu?</Link>
        </div>

        <div className="text-[13px] text-white">
          <Link href="/acount/register">Đăng ký</Link>
        </div>
      </div>

      <div className="w-96 text-center border-b-[1px] border-white leading-[0.1rem] mx-0 mt-[10px] mb-[20px]">
        <span className="text-[14px] text-white px-[10px] py-0 bg-[#101010]">
          Hoặc
        </span>
      </div>
      <LoginByIns />
      <div className="fixed bottom-5 text-white text-[8px] w-96 flex flex-row justify-between font-semibold">
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
