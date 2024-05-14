"use client";

import { useAppContext } from "@/components/Context/Context";

export default function UpdateUser({ userId }: any) {
  const { openModelUpdateUser, setOpenModelUpdateUser, user } = useAppContext();

  return userId.email !== user?.user.email ? (
    <button className="flex justify-center items-center h-[34px] w-[100%] py-[12px] border border-solid border-[#00000026] bg-[#000] rounded-[10px]">
      <p className="font-semibold text-[#fff] text-[15px]">Theo dõi</p>
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
