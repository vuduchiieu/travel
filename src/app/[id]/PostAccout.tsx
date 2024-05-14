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
      <div className="max-w-[620px] min-h mx-auto ">
        <div className="py-4 mt-[22px] w-[100%]">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-[#e5e7eb] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-[#e5e7eb] rounded-full col-span-1"></div>
                </div>
              </div>
              <div className="h-4 bg-[#e5e7eb] rounded-full"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-[#e5e7eb] rounded-full col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 mt-[22px] w-[100%]">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-[#e5e7eb] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-[#e5e7eb] rounded-full col-span-1"></div>
                </div>
              </div>
              <div className="h-4 bg-[#e5e7eb] rounded-full"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-[#e5e7eb] rounded-full col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 mt-[22px] w-[100%]">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-[#e5e7eb] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-[#e5e7eb] rounded-full col-span-1"></div>
                </div>
              </div>
              <div className="h-4 bg-[#e5e7eb] rounded-full"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-[#e5e7eb] rounded-full col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return postsId.length > 0 ? (
    <ListPosts posts={postsId} />
  ) : (
    <div className="flex justify-center items-center min-h-[270px]">
      {userId.email !== user?.user.email ? (
        <div className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] ">
          <p className="font-normal text-[#999] text-[15px]">
            Chưa có bài viết nào
          </p>
        </div>
      ) : (
        <button
          onClick={toggleModelNewPost}
          className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] border border-solid border-[#00000026] rounded-[10px]"
        >
          <p className="font-semibold text-[15px]">
            Bắt đầu tạo bài đăng đầu tiên
          </p>
        </button>
      )}
    </div>
  );
}
