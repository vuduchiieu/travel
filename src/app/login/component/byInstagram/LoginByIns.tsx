"use client";
import image from "@/assets/picture/image";
import React from "react";
import Image from "next/image";
import icon from "@/assets/icon/icon";

const LoginByIns = () => {
  return (
    <div className="flex flex-row items-center gap-x-1.5">
      <Image
        className="rounded-lg"
        height="30"
        width="30"
        src={image.instagram}
        alt="instaIcon"
      />
      <div className="text-xs"> Continues with Instagram </div>
      <Image height="16" width="16" src={icon.arrow_r} alt="arrow-right" />
    </div>
  );
};

export default LoginByIns;
