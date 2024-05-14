"use client";
import React from "react";
import Link from "next/link";

import icon from "@/assets/icon/icon";
import ModelLogin from "../ModelLogin/ModelLogin";
import { useAppContext } from "../Context/Context";
import Menu from "./Menu";
import ModelNewPosts from "../ModelNewPosts/ModelNewPosts";
import { useSession } from "next-auth/react";
import ModelUpdateUser from "@/app/[id]/ModelUpdateUser";
import Image, { StaticImageData } from "next/image";
import ModelPost from "../ListPosts/ModelPost";

export default function Header() {
  const {
    openModelUpdateUser,
    openModelPosts,
    toggleModelNewPost,
    openModelNewPosts,
    openModelLogin,
    toggleModelLogin,
    user,
  } = useAppContext();

  const { status } = useSession();

  interface NavItemProps {
    href: string;
    iconSrc: StaticImageData;
    alt: string;
    onClick?: () => void;
  }

  const NavItem = ({ href, iconSrc, alt, onClick }: NavItemProps) => {
    if (status === "authenticated") {
      return (
        <Link
          href={href}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <Image
            width={26}
            height={26}
            className="w-[26px]"
            src={iconSrc}
            alt={alt}
          />
        </Link>
      );
    } else {
      return (
        <button
          onClick={onClick}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <Image
            width={26}
            height={26}
            className="w-[26px]"
            src={iconSrc}
            alt={alt}
          />
        </button>
      );
    }
  };

  return (
    <header className="flex items-center justify-between fixed  top-0 left-0 right-0 bg-[#fff] h-[74px] w-[1230px] mx-auto  z-[1]">
      <Link href={"/"} className="ml-[19px] mr-[68px]">
        <Image
          width={32}
          height={32}
          className="w-[32px]"
          alt=""
          src={icon.logo}
        />
      </Link>
      <nav className="flex items-center justify-center max-w-[620px] h-[74px] px-[70px] ">
        {openModelUpdateUser && <ModelUpdateUser />}
        {openModelLogin && <ModelLogin />}
        {openModelNewPosts && <ModelNewPosts />}
        {openModelPosts && <ModelPost />}
        <Link
          href={"/"}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <Image
            width={26}
            height={26}
            className="w-[26px]"
            src={icon.home}
            alt=""
          />
        </Link>

        <NavItem
          href={"/search"}
          iconSrc={icon.search}
          alt={"Search"}
          onClick={() => toggleModelLogin(null)}
        />
        <button
          onClick={() =>
            status === "authenticated"
              ? toggleModelNewPost()
              : toggleModelLogin(null)
          }
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <Image
            width={26}
            height={26}
            className="w-[26px]"
            src={icon.posts}
            alt=""
          />
        </button>
        <NavItem
          href={"/activity"}
          iconSrc={icon.heartnav}
          alt={"Activity"}
          onClick={() => toggleModelLogin(null)}
        />

        <NavItem
          href={`/${user?.user._id}`}
          iconSrc={icon.user}
          alt={"Account"}
          onClick={() => toggleModelLogin(null)}
        />
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
