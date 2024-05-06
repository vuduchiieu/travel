"use client";

import React, { useState } from "react";

import ModelLogin from "../Models/ModelLogin";
import CustomAlert from "../CustomAlert/CustomAlert";
import icon from "@/assets/icon/icon";
import { useAppContext } from "../Context/Context";

export default function NavHeader() {
  const { openModelLogin, setOpenModelLogin, toggleModelLogin } =
    useAppContext();
  const [contentAler, setContentAler] = useState("");
  return (
    <nav className="flex items-center justify-center max-w-[620px] h-[74px] px-[70px] ">
      {openModelLogin && (
        <ModelLogin
          setOpenModelLogin={setOpenModelLogin}
          openModelLogin={openModelLogin}
          setContentAler={setContentAler}
          contentAler={contentAler}
        />
      )}
      {contentAler && <CustomAlert content={contentAler} />}
      <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
        <img className="w-[26px]" src={icon.home} alt="" />
      </button>
      <button
        onClick={toggleModelLogin}
        className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
      >
        <img className="w-[26px]" src={icon.search} alt="" />
      </button>
      <button
        onClick={toggleModelLogin}
        className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
      >
        <img className="w-[26px]" src={icon.posts} alt="" />
      </button>
      <button
        onClick={toggleModelLogin}
        className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
      >
        <img className="w-[26px]" src={icon.heart} alt="" />
      </button>
      <button
        onClick={toggleModelLogin}
        className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
      >
        <img className="w-[26px]" src={icon.user} alt="" />
      </button>
    </nav>
  );
}
