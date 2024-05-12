"use client";

import icon from "@/assets/icon/icon";
import NavContent from "@/app/Components/NavContent";
import Header from "@/components/Header/Header";
import ImagePost from "@/app/Components/ImagePost";
import NewPosts from "@/app/Components/NewPosts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);

  const handleGetPost = async () => {
    const res = await axios.get(`${process.env.API_URL}/v1/post`);
    setPosts(res.data.data);
  };
  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <main className="w-screen h-screen">
      <Header />
      <div className="max-w-[620px] min-h-[820px] pt-[74px] mx-auto ">
        <NewPosts />
        {true ? (
          posts.map((item: any) => (
            <div key={item._id}>
              <div className="flex justify-between py-[12px] border-b-[1px] border-b-solid boder-b-[#00000066] ">
                <div>
                  <img
                    className=" w-[36px] h-[36px] rounded-[100%] mt-[16px] "
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
                      <img className="w-[20px]" src={icon.more} alt="" />
                    </div>
                    `{" "}
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
        )}
      </div>
    </main>
  );
}
