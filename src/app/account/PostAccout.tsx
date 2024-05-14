"use client";

import { useAppContext } from "@/components/Context/Context";
import { useEffect } from "react";
import ListPosts from "@/components/ListPosts/ListPosts";

export default function PostAccout() {
  const { user, toggleModelNewPost, postsId, fetDataUserId } = useAppContext();

  useEffect(() => {
    if (user?.user._id) {
      fetDataUserId(user?.user._id);
    }
  }, [user?.user._id]);

  return postsId.length > 0 ? (
    <ListPosts posts={postsId} />
  ) : (
    <div className="flex justify-center items-center min-h-[270px]">
      <button
        onClick={toggleModelNewPost}
        className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] border border-solid border-[#00000026] rounded-[10px]"
      >
        <p className="font-medium text-[15px]">Bắt đầu tạo bài đăng đầu tiên</p>
      </button>
    </div>
  );
}
