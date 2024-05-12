"use client";
import React from "react";
import { signIn } from "next-auth/react";
import icon from "@/assets/icon/icon";
import Image from "next/image";

export default function LoginGoogle() {
  return (
    <button
      onClick={() => {
        signIn("google", {
          callbackUrl: "/",
        });
      }}
      className="flex border-solid border-[1px] border-[#00000026] rounded-[16px] p-[20px] w-[100%] h-[20%] justify-between items-center"
    >
      <Image
        width={45}
        height={45}
        className="w-[45px] rounded-[10px]"
        src={icon.google}
        alt=""
      />
      <p className="font-bold text-[16px]">Tiếp tục bằng Google</p>
      <Image
        width={16}
        height={16}
        style={{ filter: "var(--filter-grey)" }}
        className="w-[16px] rounded-[10px]"
        src={icon.arrow_r}
        alt=""
      />
    </button>
  );
}
