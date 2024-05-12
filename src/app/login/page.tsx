import image from "@/assets/picture/image";
import ModelLogin from "@/components/ModelLogin/ModelLogin";
import Image from "next/image";
import React from "react";

export default function Login() {
  const loginPage: boolean = true;

  return (
    <div className="relative z-[0] w-screen mx-auto min-h-screen flex  justify-center  items-center flex-col gap-3 pb-2 bg-[#fff]">
      <Image
        width={1785}
        height={510}
        className="fixed top-0 left-[50%] translate-x-[-50%] z-[-1]"
        src={image.background}
        alt="bg"
      />
      <ModelLogin loginPage={loginPage} />
      <ul className="fixed bottom-5 min-w-[522px] flex items-center justify-between">
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          © 2024
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Điều khoản
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Chính sách quyền riêng tư
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Chính sách cookie
        </li>
        <li className="font-normal text-[#999] text-[12px] cursor-pointer hover:underline">
          Báo cáo sự cố
        </li>
      </ul>
    </div>
  );
}
