"use client";
import icon from "@/assets/icon/icon";
import { useAppContext } from "../Context/Context";

export default function NavContent() {
  const { toggleModelLogin } = useAppContext();
  return (
    <div className="flex my-[6px]">
      <div
        onClick={toggleModelLogin}
        className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
      >
        <img
          style={{ filter: "var(--filter-black) " }}
          className="w-[22px]"
          src={icon.heart}
          alt=""
        />
      </div>
      <div
        onClick={toggleModelLogin}
        className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
      >
        <img className="w-[22px]" src={icon.comment} alt="" />
      </div>
      <div
        onClick={toggleModelLogin}
        className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
      >
        <img className="w-[22px]" src={icon.repost} alt="" />
      </div>
      <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
        <img className="w-[22px]" src={icon.share} alt="" />
      </div>
    </div>
  );
}
