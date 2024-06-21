"use client";

import icon from "@/assets/image/icon";
import { useAppContext } from "@/components/Context/Context";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UpdateUser({ userId }: any) {
  const { openModelUpdateUser, setOpenModelUpdateUser, user, setContentAler } =
    useAppContext();

  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsFollowing(userId.followers.some((i: any) => i._id === user.user._id));
  }, [userId, user]);

  const handleFolow = async () => {
    setIsloading(true);
    const res = await axios.post(
      `${process.env.API_URL}/v1/follower/${user.user._id}/${userId._id}`
    );
    setContentAler(res.data.message);
    setIsFollowing(!isFollowing);
    setIsloading(false);
  };

  return userId.email !== user?.user.email ? (
    <button
      style={isFollowing ? { backgroundColor: "#fff" } : {}}
      onClick={handleFolow}
      className="flex justify-center items-center h-[34px] w-[100%] py-[12px] border border-solid border-[#00000026] bg-[#000] rounded-[10px]"
    >
      {isLoading ? (
        <Image
          width={24}
          height={24}
          priority
          className="animate-spin"
          src={icon.loading}
          alt=""
        />
      ) : isFollowing ? (
        <p className="font-semibold text-[#000] text-[15px]">Đang theo dõi</p>
      ) : (
        <p className="font-semibold text-[#fff] text-[15px]">Theo dõi</p>
      )}
    </button>
  ) : (
    <button
      onClick={() => setOpenModelUpdateUser(!openModelUpdateUser)}
      className="flex justify-center items-center h-[34px] w-[100%] py-[12px] border border-solid border-[#00000026] rounded-[10px]"
    >
      <p className="font-semibold text-[15px]">Chỉnh sửa trang cá nhân</p>
    </button>
  );
}
