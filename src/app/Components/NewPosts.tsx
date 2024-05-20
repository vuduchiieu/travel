"use client";
import { useAppContext } from "../../components/Context/Context";
import icon from "@/assets/image/icon";
import Image from "next/image";

export default function NewPosts() {
  const { user, status, toggleModelNewPost, isMobile } = useAppContext();

  return (
    status === "authenticated" && (
      <div
        onClick={toggleModelNewPost}
        className=" flex justify-between items-center h-[68px] py-[16px] border-b-[1px] border-b-solid boder-b-[#00000066]"
      >
        <Image
          width={36}
          height={36}
          style={isMobile ? { marginLeft: 6 } : {}}
          className="w-[36px] h-[36px] rounded-[50%]"
          src={user.user.image || icon.defaultImage}
          alt=""
        />
        <div
          style={isMobile ? { marginLeft: 6, width: "65%" } : {}}
          className="w-[80%]"
        >
          <p className="text-[#999] text-[15px]">Bắt đầu bài viết mới...</p>
        </div>
        <button
          style={isMobile ? { marginRight: 6 } : {}}
          className="h-[36px] w-[68px] rounded-full bg-[#000]"
        >
          <p className="text-[#fff] font-semibold">Đăng</p>
        </button>
      </div>
    )
  );
}
