"use client";

import React, { useEffect, useState } from "react";

import icon from "@/assets/icon/icon";
import image from "@/assets/picture/image";

interface ModelLoginProps {
  setOpenModelLogin: (open: boolean) => void;
  openModelLogin: boolean;
  setContentAler: any;
  contentAler: any;
}

export default function ModelLogin({
  setOpenModelLogin,
  openModelLogin,
  setContentAler,
  contentAler,
}: ModelLoginProps) {
  const [swapRegister, setSwapregister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const newUser = {
    username,
    password,
  };

  const handleOpenModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelLogin(!openModelLogin);
      setContentAler(false);
    }
  };

  const handleSwapregister = () => {
    setSwapregister(!swapRegister);
  };

  useEffect(() => {
    if (!!contentAler) {
      setTimeout(() => {
        setContentAler(false);
      }, 3000);
    }
  }, [contentAler]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newUser.username) {
      setContentAler("vui lòng nhập username");
      return;
    }
    if (!newUser.password) {
      setContentAler("vui lòng nhập password");
      return;
    }
  };

  return (
    <div
      onClick={handleOpenModelLogin}
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] "
    >
      <div className="flex flex-col items-center p-[24px] w-[370px] h-[456px] bg-[#fff] z-[1] rounded-[16px]">
        {swapRegister ? (
          <h2 className="h-[10%] font-bold text-[16px]">Đăng ký</h2>
        ) : (
          <h2 className="h-[10%] font-bold text-[16px]">Đăng nhập</h2>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center h-[45%] w-[100%]"
        >
          <input
            type="text"
            placeholder="Tên người dùng, số điện thoại hoặc email"
            className="w-[100%] rounded-[12px] p-[16px] outline-none bg-[#f5f5f5] mb-[8px] text-[15px] border-[1px] border-[#f5f5f5]  focus:border-[#00000026]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-[100%] rounded-[12px] p-[16px] outline-none bg-[#f5f5f5] mb-[8px] text-[15px] border-[1px] border-[#f5f5f5]   focus:border-[#00000026]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={
              newUser.username && newUser.password
                ? { cursor: "pointer" }
                : { cursor: "no-drop" }
            }
            type="submit"
            className="w-[100%] rounded-[12px] p-[16px] outline-none bg-[#000] mb-[8px] "
          >
            <p
              style={
                newUser.username && newUser.password
                  ? { color: "#fff" }
                  : { color: "#999999" }
              }
              className=" font-semibold"
            >
              {swapRegister ? <span>Đăng ký</span> : <span>Đăng nhập</span>}
            </p>
          </button>
        </form>

        <button onClick={handleSwapregister} className="h-[12%] text-[#999999]">
          {swapRegister ? <p>Đăng nhập</p> : <p>Đăng ký</p>}
        </button>
        <p className="relative h-[12%] text-center w-[100%] text-[#999999] after:absolute after:top-[25%] after:left-0 after:h-[1px] after:w-[40%] after:bg-[#00000026] before:absolute before:top-[25%] before:right-0 before:h-[1px] before:w-[40%] before:bg-[#00000026]">
          hoặc
        </p>
        <button className="flex border-solid border-[1px] border-[#00000026] rounded-[16px] p-[20px] w-[100%] h-[20%] justify-between items-center">
          <img
            className="w-[45px] rounded-[10px]"
            src={image.instagram}
            alt=""
          />
          <p className="font-bold text-[16px]">Tiếp tục bằng Instagram</p>
          <img
            style={{ filter: "var(--filter-grey)" }}
            className="w-[16px] rounded-[10px]"
            src={icon.arrow_r}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
