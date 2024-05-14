"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Tippy from "@tippyjs/react/headless";
import icon from "@/assets/icon/icon";
import { useAppContext } from "../Context/Context";
import CustomAlert from "../CustomAlert/CustomAlert";
import Image from "next/image";

export default function Menu() {
  const { contentAler, setContentAler } = useAppContext();
  const [openMenu, setOpenNenu] = useState<boolean>(false);
  const handleErr = () => {
    setContentAler("Tính năng đang phát triển");
  };
  return (
    <Tippy
      interactive
      placement="bottom-end"
      visible={openMenu}
      render={(attrs) => (
        <div
          tabIndex={-1}
          {...attrs}
          className="relative left-[-45%] overflow-hidden w-[174px] h-[281px] rounded-[16px] outline-[0.5px] outline-[#00000026] outline shadow-md"
        >
          <button
            onClick={handleErr}
            className="flex h-[46px] w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] p-[16px] "
          >
            <p className="text-[15px] font-medium">Giao diện</p>
          </button>
          <button
            onClick={handleErr}
            className="flex h-[46px] w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] p-[16px] "
          >
            <p className="text-[15px] font-medium">Cài đặt</p>
          </button>
          <button
            onClick={handleErr}
            className="flex h-[46px] w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] p-[16px] "
          >
            <p className="text-[15px] font-medium">Đã lưu</p>
          </button>
          <button
            onClick={handleErr}
            className="flex h-[46px] w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] p-[16px] "
          >
            <p className="text-[15px] font-medium">Lượt thích của bạn</p>
          </button>
          <button
            onClick={handleErr}
            className="flex h-[46px] w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] p-[16px] "
          >
            <p className="text-[15px] font-medium">Báo cáo sự cố</p>
          </button>
          <button onClick={() => signOut()} className="h-[46px] p-[16px] ">
            <p className="text-[15px] font-medium">Đăng xuất</p>
          </button>
        </div>
      )}
      onClickOutside={() => setOpenNenu((prev) => !prev)}
    >
      <button
        onClick={() => setOpenNenu((prev) => !prev)}
        className="w-[106px] mr-[13px]"
      >
        {contentAler && <CustomAlert content={contentAler} />}
        <Image
          width={24}
          height={24}
          className="w-[24px] "
          src={icon.menu}
          alt=""
        />
      </button>
    </Tippy>
  );
}
