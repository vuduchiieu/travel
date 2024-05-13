"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ListPosts from "@/components/ListPosts/ListPosts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetData = async () => {
    const response = await axios.get(`${process.env.API_URL}/v1/post`);
    setPosts(response.data.data);
  };
  useEffect(() => {
    fetData();
  }, []);

  return posts.length > 0 ? (
    <ListPosts posts={posts} />
  ) : (
    <>
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
    </>
  );
}
