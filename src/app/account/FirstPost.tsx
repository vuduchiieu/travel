"use client";

import { useAppContext } from "@/components/Context/Context";

export default function FirstPost() {
  const { toggleModelPost } = useAppContext();
  return (
    <div className="flex justify-center items-center min-h-[270px]">
      <button
        onClick={toggleModelPost}
        className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] border border-solid border-[#00000026] rounded-[10px]"
      >
        <p className="font-medium text-[15px]">Bắt đầu tạo bài đăng đầu tiên</p>
      </button>
    </div>
  );
}
