"use client";
import icon from "@/assets/icon/icon";
import { useAppContext } from "../../components/Context/Context";
import Image from "next/image";

export default function NavContent() {
  const { toggleModelLogin } = useAppContext();
  return (
    <div className="flex my-[6px]">
      <div
        onClick={toggleModelLogin}
        className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer   hover:bg-[#f5f5f5]"
      >
        <Image
          width={24}
          height={24}
          style={{ filter: "var(--filter-black)" }}
          src={icon.heart}
          alt=""
        />
      </div>
      <div
        onClick={toggleModelLogin}
        className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
      >
        <Image width={22} height={22} src={icon.comment} alt="" />
      </div>
      <div
        onClick={toggleModelLogin}
        className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
      >
        <Image width={22} height={22} src={icon.repost} alt="" />
      </div>
      <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
        <Image width={22} height={22} src={icon.share} alt="" />
      </div>
    </div>
  );
}
