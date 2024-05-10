"use client";

import { useAppContext } from "@/components/Context/Context";

export default function UpdateUser() {
  const { openModelUpdateUser, setOpenModelUpdateUser } = useAppContext();

  return (
    <>
      <button
        onClick={() => setOpenModelUpdateUser(!openModelUpdateUser)}
        className="flex justify-center items-center h-[34px] w-[100%] py-[12px] border border-solid border-[#00000026] rounded-[10px]"
      >
        <p className="font-medium text-[15px]">Chỉnh sửa trang cá nhân</p>
      </button>
    </>
  );
}
