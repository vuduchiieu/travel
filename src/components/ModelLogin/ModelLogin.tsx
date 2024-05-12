"use client";
import React, { useState } from "react";
import { useAppContext } from "../Context/Context";
import CustomAlert from "../CustomAlert/CustomAlert";
import LoginGoogle from "./LoginGoogle";
import axios from "axios";
import { signIn } from "next-auth/react";
import icon from "@/assets/icon/icon";
import Image from "next/image";

interface ModelLoginProps {
  loginPage?: boolean;
}

export default function ModelLogin({ loginPage }: ModelLoginProps) {
  const { openModelLogin, setOpenModelLogin, contentAler, setContentAler } =
    useAppContext();

  const [swapRegister, setSwapregister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);
  const [isLoadingRegister, setIsLoadingRegister] = useState<boolean>(false);

  const newUser = {
    email,
    password,
  };

  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelLogin(!openModelLogin);
    }
  };

  const handleSwapregister = () => {
    setSwapregister((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newUser.email) {
      setContentAler("vui lòng nhập tên người dùng, số điện thoại hoặc email");
      return;
    }
    if (!newUser.password) {
      setContentAler("vui lòng nhập mật khẩu");
      return;
    }
    setIsLoadingLogin(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setIsLoadingLogin(false);
      if (!res?.ok) {
        setContentAler("Thông tin không hợp lệ");
      } else {
        window.location.href = "/";
      }
    } catch (error: any) {
      setIsLoadingLogin(false);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newUser.email) {
      setContentAler("vui lòng nhập email");
      return;
    }
    if (!newUser.password) {
      setContentAler("vui lòng nhập mật khẩu");
      return;
    }
    setIsLoadingRegister(true);
    try {
      await axios.post("/api/auth/register", newUser);
      await handleLogin(e);
      setIsLoadingRegister(false);
    } catch (error: any) {
      setIsLoadingRegister(false);
    }
  };

  return (
    <div
      onClick={handleCloseModelLogin}
      style={loginPage ? { backgroundColor: "transparent" } : {}}
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] "
    >
      {contentAler && <CustomAlert content={contentAler} />}
      <div
        style={loginPage ? { backgroundColor: "transparent", width: 420 } : {}}
        className="flex flex-col items-center p-[24px] w-[370px] h-[456px] bg-[#fff] z-[1] rounded-[16px]"
      >
        {swapRegister ? (
          <h2 className="h-[10%] font-bold text-[16px]">Đăng ký</h2>
        ) : (
          <h2 className="h-[10%] font-bold text-[16px]">Đăng nhập</h2>
        )}
        {swapRegister ? (
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center h-[45%] w-[100%]"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-[100%] rounded-[12px] p-[16px] outline-none bg-[#f5f5f5] mb-[8px] text-[15px] border-[1px] border-[#f5f5f5]  focus:border-[#00000026]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              className="w-[100%] rounded-[12px] p-[16px] outline-none bg-[#f5f5f5] mb-[8px] text-[15px] border-[1px] border-[#f5f5f5]   focus:border-[#00000026]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={
                isLoadingRegister
                  ? { pointerEvents: "none" }
                  : { pointerEvents: "auto" }
              }
              type="submit"
              className="flex justify-center items-center w-[100%] rounded-[12px] p-[16px] outline-none bg-[#000] mb-[8px] "
            >
              {isLoadingRegister ? (
                <Image
                  width={24}
                  height={24}
                  className="animate-spin w-[24px]"
                  src={icon.loading}
                  alt=""
                />
              ) : (
                <p
                  style={
                    newUser.email && newUser.password
                      ? { color: "#fff" }
                      : { color: "#999999" }
                  }
                  className=" font-semibold"
                >
                  Đăng ký
                </p>
              )}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center h-[45%] w-[100%]"
          >
            <input
              type="text"
              placeholder="Tên người dùng, số điện thoại hoặc email"
              className="w-[100%] rounded-[12px] p-[16px] outline-none bg-[#f5f5f5] mb-[8px] text-[15px] border-[1px] border-[#f5f5f5]  focus:border-[#00000026]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                isLoadingLogin
                  ? { pointerEvents: "none" }
                  : { pointerEvents: "auto" }
              }
              type="submit"
              className="flex justify-center items-center w-[100%] rounded-[12px] p-[16px] outline-none bg-[#000] mb-[8px] "
            >
              {isLoadingLogin ? (
                <Image
                  width={24}
                  height={24}
                  className="animate-spin w-[24px] h-[24px] rounded-[50%]"
                  src={icon.loading}
                  alt=""
                />
              ) : (
                <p
                  style={
                    newUser.email && newUser.password
                      ? { color: "#fff" }
                      : { color: "#999999" }
                  }
                  className=" font-semibold"
                >
                  Đăng nhập
                </p>
              )}
            </button>
          </form>
        )}

        <button onClick={handleSwapregister} className="h-[12%] text-[#999999]">
          {swapRegister ? <p>Đăng nhập</p> : <p>Đăng ký</p>}
        </button>
        <p className="relative h-[12%] text-center w-[100%] text-[#999999] after:absolute after:top-[25%] after:left-0 after:h-[1px] after:w-[40%] after:bg-[#00000026] before:absolute before:top-[25%] before:right-0 before:h-[1px] before:w-[40%] before:bg-[#00000026]">
          hoặc
        </p>
        <LoginGoogle />
      </div>
    </div>
  );
}
