"use client";
import Image from "next/image";
import { useAppContext } from "../Context/Context";

export default function NewPosts() {
  const { isLogin, user } = useAppContext();

  return (
    isLogin && (
      <div className=" flex justify-between items-center  h-[68px] py-[16px] ">
        <Image
          width={36}
          height={36}
          className="w-[36px] rounded-[100%]"
          src={user?.user.image}
          alt=""
        />
        <div className="w-[80%]">
          <p className="text-[#999] text-[15px]">Bắt đầu thread...</p>
        </div>
        <button className="h-[36px] w-[68px] rounded-full bg-[#000]">
          <p className="text-[#fff] font-semibold">Đăng</p>
        </button>
      </div>
    )
  );
}
