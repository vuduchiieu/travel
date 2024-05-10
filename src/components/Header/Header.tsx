"use client";
import React from "react";
import Link from "next/link";

import icon from "@/assets/icon/icon";
import ModelLogin from "../ModelLogin/ModelLogin";
import { useAppContext } from "../Context/Context";
import ModelImage from "./ModelImage";
import Menu from "./Menu";
import ModelPosts from "../ModelPosts/ModelPosts";
import { useSession } from "next-auth/react";
import ModelUpdateUser from "@/app/account/ModelUpdateUser";

export default function Header() {
  const {
    openModelUpdateUser,
    toggleModelPost,
    openModelPosts,
    openModelLogin,
    toggleModelLogin,
    openModelImage,
  } = useAppContext();

  const { status } = useSession();

  return (
    <header className="flex items-center justify-between fixed  top-0 left-0 right-0 bg-[#fff] h-[74px] w-[1230px] mx-auto  z-[1]">
      <Link href={"/"} className="ml-[19px] mr-[68px]">
        <img className="w-[32px]" alt="" src={icon.logo} />
      </Link>
      <nav className="flex items-center justify-center max-w-[620px] h-[74px] px-[70px] ">
        {openModelUpdateUser && <ModelUpdateUser />}
        {openModelLogin && <ModelLogin />}
        {openModelImage && <ModelImage />}
        {openModelPosts && <ModelPosts />}
        <Link
          href={"/"}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <img className="w-[26px]" src={icon.home} alt="" />
        </Link>
        <Link
          href={status === "authenticated" ? "/search" : ""}
          onClick={toggleModelLogin}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <img className="w-[26px]" src={icon.search} alt="" />
        </Link>
        <button
          onClick={
            status === "authenticated" ? toggleModelPost : toggleModelLogin
          }
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <img className="w-[26px]" src={icon.posts} alt="" />
        </button>
        <Link
          href={status === "authenticated" ? "/activity" : ""}
          onClick={toggleModelLogin}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <img className="w-[26px]" src={icon.heart} alt="" />
        </Link>
        <Link
          href={status === "authenticated" ? "/account" : ""}
          onClick={toggleModelLogin}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <img className="w-[26px]" src={icon.user} alt="" />
        </Link>
      </nav>
      {status === "authenticated" ? (
        <Menu />
      ) : (
        <Link
          href={"/login"}
          className="flex items-center justify-center w-[106px] h-[34px] bg-[#000] rounded-[10px] text-[15px] mr-[13px]"
        >
          <p className="text-[#fff]">Đăng nhập</p>
        </Link>
      )}
    </header>
  );
}
