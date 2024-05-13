"use client";

import { useAppContext } from "@/components/Context/Context";
import axios from "axios";
import { useEffect, useState } from "react";
import ListPosts from "@/components/ListPosts/ListPosts";

export default function PostAccout() {
  const { user, toggleModelPost } = useAppContext();
  const [posts, setPosts] = useState([]);
  const fetData = async () => {
    const response = await axios.get(
      `${process.env.API_URL}/v1/post/${user.user._id}`
    );
    setPosts(response.data.data);
  };

  useEffect(() => {
    fetData();
  }, []);

  return posts.length > 0 ? (
    <ListPosts posts={posts} />
  ) : (
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
