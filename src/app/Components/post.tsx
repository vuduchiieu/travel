"use client";
import icon from "@/assets/icon/icon";
import axios from "axios";
import Image from "next/image";
import ImagePost from "./ImagePost";
import NavContent from "./NavContent";
import { useEffect, useState } from "react";

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
    posts.map((item: any) => (
      <div key={item._id}>
        <div className="flex justify-between py-[12px] border-b-[1px] border-b-solid boder-b-[#00000066] ">
          <div>
            <Image
              width={36}
              height={36}
              className="rounded-[100%] mt-[16px] "
              src={item.author.image || icon.defaultImage}
              alt=""
            />
          </div>
          <div className="h-[100%] w-[92%]">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold leading-[21px] text-[15px]">
                {item.author.name}
              </h3>
              <p className="flex-[0.95] leading-[21px] font-normal text-[#999999] text-[15px]">
                {item.milestone}
              </p>
              <div
                style={{ transition: "all 0.5s ease-in-out" }}
                className="flex justify-center items-center h-[36px] w-[36px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
              >
                <Image width={20} height={20} src={icon.more} alt="" />
              </div>
            </div>
            <div className="min-h-[30px] whitespace-pre-wrap">
              <p>{item.title}</p>
            </div>
            <ImagePost src={item.image[0].url} />
            <NavContent />
            <div className="flex">
              <p className="text-[#999999] font-normal text-[15px]">
                <span>9 bình luận</span>
              </p>
              <p className="text-[#999999] font-normal text-[15px] ml-[10px]">
                <span> lượt thích</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    ))
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
