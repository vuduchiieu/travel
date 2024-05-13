"use client";
import { useSession } from "next-auth/react";
import { useAppContext } from "../../components/Context/Context";
import icon from "@/assets/icon/icon";
import Image from "next/image";

export default function NewPosts() {
  const { user, toggleModelNewPost } = useAppContext();

  const { status } = useSession();

  return (
    status === "authenticated" && (
      <div
        onClick={toggleModelNewPost}
        className=" flex justify-between items-center h-[68px] py-[16px] border-b-[1px] border-b-solid boder-b-[#00000066]"
      >
        <Image
          width={36}
          height={36}
          className="w-[36px] h-[36px] rounded-[50%]"
          src={user.user.image || icon.defaultImage}
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
