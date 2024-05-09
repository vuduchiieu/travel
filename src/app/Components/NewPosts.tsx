"use client";
import { useAppContext } from "../../components/Context/Context";
import icon from "@/assets/icon/icon";

export default function NewPosts() {
  const { isLogin, user, toggleModelPost } = useAppContext();

  return (
    isLogin && (
      <div
        onClick={toggleModelPost}
        className=" flex justify-between items-center h-[68px] py-[16px] border-b-[1px] border-b-solid boder-b-[#00000066]"
      >
        <img
          className="w-[36px] rounded-[100%]"
          src={user?.user?.image ?? icon.defaultImage}
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
