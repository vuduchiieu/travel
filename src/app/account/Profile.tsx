"use client";

import icon from "@/assets/icon/icon";
import { useAppContext } from "@/components/Context/Context";
import Link from "next/link";

export default function Profile() {
  const { user } = useAppContext();

  return (
    <div className="min-h-[195px] pt-[16px] pb-[10px] ">
      <div className="flex justify-between items-center h-[84px]">
        <div className="w-[472px] h-[56px] ">
          <h2 className="font-semibold text-[24px]">{user?.user.email}</h2>
          <p className="font-light text-[15px]">{user?.user.name}</p>
        </div>
        <img
          className="object-cover w-[84px] rounded-[50%]"
          src={user?.user.image || icon.defaultImage}
          alt=""
        />
      </div>
      <div className="min-h-[74px] mt-[16px]">
        <p className="font-normal text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, accusamus consequatur. Sed, soluta aspernatur explicabo
          dicta nulla temporibus possimus est.
        </p>
      </div>
      <div className="flex justify-between items-center h-[36px] mt-[12px]">
        <p className="font-normal text-[15px] text-[#999999]">
          4 người theo dõi
        </p>
        <Link href={"https://myaccount.google.com"} target="_blank">
          <img className="w-[24px]" src={icon.google} alt="" />
        </Link>
      </div>
    </div>
  );
}
