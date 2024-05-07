"use client";
import React from "react";
import { signIn } from "next-auth/react";
import icon from "@/assets/icon/icon";

export default function LoginGoogle() {
  return (
    <button
      onClick={() => {
        signIn("instagram", {
          callbackUrl: "/",
        });
      }}
      className="flex border-solid border-[1px] border-[#00000026] rounded-[16px] p-[20px] w-[100%] h-[20%] justify-between items-center"
    >
      <img className="w-[45px] rounded-[10px]" src={icon.instagram} alt="" />
      <p className="font-bold text-[16px]">Tiếp tục bằng Instagram</p>
      <img
        style={{ filter: "var(--filter-grey)" }}
        className="w-[16px] rounded-[10px]"
        src={icon.arrow_r}
        alt=""
      />
    </button>
  );
}
