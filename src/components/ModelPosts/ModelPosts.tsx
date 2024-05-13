"use client";

import icon from "@/assets/icon/icon";
import { useAppContext } from "../Context/Context";
import { useEffect, useState } from "react";
import TippySelectPrivatePost from "./TippySelectPrivatePost";
import Image from "next/image";
import axios from "axios";

export default function ModelPosts() {
  const { user, setOpenModelPosts, setContentAler, setIsRefetch } =
    useAppContext();

  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelPosts(false);
    }
  };

  const [isLoadingSubmit, setIsloadingSubmit] = useState<boolean>(false);
  const [image, setImage] = useState<File | any>(null);
  const [imagePreView, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [select, SetSelect] = useState<any>(true);

  useEffect(() => {
    if (image) {
      const imageURL = URL.createObjectURL(image);
      setImagePreview(imageURL);
      return () => {
        URL.revokeObjectURL(imageURL);
      };
    }
  }, [image]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = new FormData();
    setIsloadingSubmit(true);
    try {
      if (image) {
        newPost.append("images", image);
      }
      if (title) {
        newPost.append("title", title);
      }

      if (select) {
        newPost.append("isPublic", select);
      }

      await axios.post(
        `http://localhost:3001/v1/post/${user.user._id}`,
        newPost
      );
      setIsloadingSubmit(false);
      setOpenModelPosts(false);
      setIsRefetch(true);
    } catch (error: any) {
      setContentAler(error.response?.data.message);
      setIsloadingSubmit(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelLogin}
    >
      <div className="flex flex-col items-center rounded-[16px]">
        <div className="h-[46px] min-w">
          <h3 className="text-[#fff] text-[16px] font-bold">Bài viết mới</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-[8px] p-[24px] w-[620px] min-h bg-[#fff] rounded-[16px]"
        >
          <div className="flex justify-between mb-[24px]">
            <Image
              width={48}
              height={48}
              className="object-cover w-[48px] h-[48px] rounded-[50%]"
              src={user?.user.image || icon.defaultImage}
              alt=""
            />
            <div className=" w-[512px]">
              <h2 className="font-semibold text-[15px]">
                {user?.user.name || user?.user.email}
              </h2>
              <div className="min-h ">
                <input
                  style={{ outline: "none" }}
                  className="w-[100%] text-[#999px] text-[15px] font-normal"
                  type="text"
                  placeholder="Bắt đầu bài viết mới...."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {imagePreView && (
                <div className="relative inline-block mt-[12px]">
                  <Image
                    unoptimized
                    width={0}
                    height={0}
                    className="w-auto h-[430px] object-cover p-[1px] border-[1px] border-solid boder-[#00000066] rounded-[16px]"
                    src={imagePreView}
                    alt=""
                  />
                  <button
                    onClick={() => {
                      setImagePreview("");
                      setImage(null);
                    }}
                    className="flex justify-center items-center absolute top-[2%] right-[2%] w-[24px] h-[24px] rounded-[50%] bg-[#00000066]"
                  >
                    <Image
                      width={12}
                      height={12}
                      style={{ filter: "var(--filter-wite)" }}
                      src={icon.close}
                      alt=""
                    />
                  </button>
                </div>
              )}
              <div className="flex h-[36px] mt-[4px] ">
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="image"
                  onChange={(e) => {
                    if (e.target.files) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
                <label className="cursor-pointer" htmlFor="image">
                  <Image width={20} height={20} src={icon.photo} alt="" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-[44px] ">
            <TippySelectPrivatePost select={select} SetSelect={SetSelect} />
            <button
              type="submit"
              className="flex justify-center items-center px-[16px] h-[36px] w-[76px] rounded-full  bg-[#000]"
            >
              {isLoadingSubmit ? (
                <Image
                  width={24}
                  height={24}
                  priority
                  className="animate-spin"
                  src={icon.loading}
                  alt=""
                />
              ) : (
                <p className="text-[#fff] text-[15px] font-semibold">Đăng</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
