"use client";

import { useAppContext } from "@/components/Context/Context";
import { useEffect, useState } from "react";
import ListPosts from "@/components/ListPosts/ListPosts";

export default function PostAccout({ userId }: any) {
  const { user, toggleModelNewPost, postsId, fetDataUserId } = useAppContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetData = async () => {
    setIsLoading(true);
    if (userId._id) {
      await fetDataUserId(userId._id);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetData();
  }, [userId._id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[270px]">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return postsId.length > 0 ? (
    <ListPosts posts={postsId} />
  ) : (
    <div className="flex justify-center items-center min-h-[270px]">
      {userId._id === user.user._id ? (
        <button
          onClick={toggleModelNewPost}
          className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] border border-solid border-[#00000026] rounded-[10px]"
        >
          <p className="font-semibold text-[15px]">
            Bắt đầu tạo bài đăng đầu tiên
          </p>
        </button>
      ) : (
        <div className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] ">
          <p className="font-normal text-[#999] text-[15px]">
            Chưa có bài viết nào
          </p>
        </div>
      )}
    </div>
  );
}
