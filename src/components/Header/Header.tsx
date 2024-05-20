"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import icon from "@/assets/image/icon";
import Menu from "./Menu";
import Image from "next/image";
import NavBar from "./NavBar";
import { useAppContext } from "../Context/Context";

export default function Header() {
  const { status } = useAppContext();

  return (
    <motion.header
      layout
      layoutRoot
      className="flex items-center justify-between fixed top-0 left-[-1%] right-0 bg-[#fff] h-[74px] max-w-[1230px] mx-auto z-[1]"
    >
      <Link href={"/"} className="ml-[19px] ">
        <Image
          width={32}
          height={32}
          className="w-[32px]"
          alt=""
          src={icon.logo}
        />
      </Link>
      <NavBar />
      {status === "authenticated" ? (
        <Menu />
      ) : (
        <Link
          href={"/login"}
          className="flex items-center justify-center h-[34px] bg-[#000] rounded-[10px] text-[15px] w-[106px] "
        >
          <p className="text-[#fff]">Đăng nhập</p>
        </Link>
      )}
    </motion.header>
  );
}
