"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Tippy from "@tippyjs/react/headless";
import icon from "@/assets/image/icon";
import { useAppContext } from "../Context/Context";
import CustomAlert from "../CustomAlert/CustomAlert";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { contentAler, setContentAler } = useAppContext();
  const router = useRouter();
  const [openMenu, setOpenNenu] = useState<boolean>(false);
  const handleErr = () => {
    setContentAler("Tính năng đang phát triển");
  };

  const handleLogout = async () => {
    const data = await signOut({
      callbackUrl: "/login",
      redirect: false,
    });
    router.push(data.url);
  };

  return (
    <div>
      <Tippy
        interactive
        placement="bottom-end"
        visible={openMenu}
        render={(attrs) => (
          <div
            tabIndex={-1}
            {...attrs}
            className="relative left-0 overflow-hidden w-[174px] h-[281px] bg-[#fff] rounded-[16px] outline-[0.5px] outline-[#00000026] outline shadow-md"
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
            <button onClick={handleLogout} className="h-[46px] p-[16px] ">
              <p className="text-[15px] font-medium">Đăng xuất</p>
            </button>
          </div>
        )}
        onClickOutside={() => setOpenNenu((prev) => !prev)}
      >
        <div
          onClick={() => setOpenNenu((prev) => !prev)}
          className="mr-[13px] cursor-pointer"
        >
          {contentAler && <CustomAlert content={contentAler} />}
          <Image
            width={24}
            height={24}
            className="w-[24px] "
            src={icon.menu}
            alt=""
          />
        </div>
      </Tippy>
    </div>
  );
}
