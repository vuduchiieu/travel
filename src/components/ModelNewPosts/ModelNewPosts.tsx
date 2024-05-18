"use client";

import icon from "@/assets/icon/icon";
import { useAppContext } from "../Context/Context";
import { useEffect, useRef, useState } from "react";
import TippySelectPrivatePost from "./TippySelectPrivatePost";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";

export default function ModelNewPosts() {
  const {
    isMobile,
    user,
    setOpenModelNewPosts,
    setContentAler,
    fetData,
    fetDataUserId,
  } = useAppContext();

  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelNewPosts(false);
    }
  };

  const [isLoadingSubmit, setIsloadingSubmit] = useState<boolean>(false);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [select, SetSelect] = useState<any>(true);

  useEffect(() => {
    const newImagePreviews = images.map((image) => URL.createObjectURL(image));
    setImagePreviews(newImagePreviews);
    return () => {
      newImagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [images]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = new FormData();
    setIsloadingSubmit(true);
    try {
      images.forEach((image) => {
        newPost.append("images", image);
      });
      if (title) {
        newPost.append("title", title);
      }

      if (select) {
        newPost.append("isPublic", select);
      }

      await axios.post(
        `${process.env.API_URL}/v1/post/${user.user._id}`,
        newPost
      );
      await fetData();
      await fetDataUserId(user.user._id);
      setOpenModelNewPosts(false);
      setIsloadingSubmit(false);
    } catch (error: any) {
      setContentAler(error.response?.data.message);
      setIsloadingSubmit(false);
    }
  };

  const handleUploadImage = (e: any) => {
    const files = Array.from(e.target.files);
    if (files) {
      const newImages = [...images];
      files.forEach((file: any) => newImages.push(file));
      setImages(newImages);
    }
  };

  const handleRemoveImage = (i: number) => {
    const newImages = [...images];
    newImages.splice(i, 1);
    setImages(newImages);
  };

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const handlePrevSlide = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft -= 240;
    }
  };

  const handleNextSlide = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft += 240;
    }
  };

  console.log(user);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelLogin}
    >
      <div className="flex flex-col items-center rounded-[16px]">
        <div className="h-[46px]">
          <h3 className="text-[#fff] text-[16px] font-bold">Bài viết mới</h3>
        </div>
        <form
          style={isMobile ? { maxWidth: "95vw" } : {}}
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
            <div
              style={isMobile ? { minWidth: 312 } : {}}
              className="w-[512px]"
            >
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
              <div className="relative">
                {imagePreviews.length > 1 && (
                  <motion.span
                    whileHover={{
                      cursor: "pointer",
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                    className="absolute left-[-10%] top-[50%] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] bg-[#f5f5f5]"
                    onClick={handlePrevSlide}
                  >
                    <Image width={16} src={icon.arrowleft} alt="" />
                  </motion.span>
                )}

                <div
                  style={{ overflowX: "auto", scrollBehavior: "smooth" }}
                  className="flex"
                  ref={imageContainerRef}
                >
                  {imagePreviews.map((preview: any, i: number) => (
                    <div className="relative mr-[6px]" key={i}>
                      <Image
                        unoptimized
                        width={0}
                        height={0}
                        style={
                          preview.length > 1
                            ? { width: "auto" }
                            : { width: 430 }
                        }
                        className="max-w-none h-[430px] object-cover p-[1px] border-[1px] border-solid boder-[#00000066] rounded-[16px]"
                        src={preview}
                        alt=""
                      />
                      {handleRemoveImage && (
                        <div
                          onClick={() => handleRemoveImage(i)}
                          className="flex justify-center items-center absolute top-[2%] right-[2%] w-[24px] h-[24px] rounded-[50%] bg-[#00000066]"
                        >
                          <Image
                            width={12}
                            height={12}
                            style={{
                              filter: "var(--filter-wite)",
                              cursor: "pointer",
                            }}
                            src={icon.close}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {imagePreviews.length > 1 && (
                  <motion.span
                    whileHover={{
                      cursor: "pointer",
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                    className="absolute right-[5%] top-[50%] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] bg-[#f5f5f5]"
                    onClick={handleNextSlide}
                  >
                    <Image width={16} src={icon.arrowright} alt="" />
                  </motion.span>
                )}
              </div>

              <div className="flex h-[36px] mt-[4px] ">
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="image"
                  onChange={(e) => {
                    handleUploadImage(e);
                  }}
                  multiple
                />
                <label className="cursor-pointer" htmlFor="image">
                  <Image width={20} height={20} src={icon.photo} alt="" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-[44px] ">
            <TippySelectPrivatePost
              select={select}
              SetSelect={SetSelect}
              isMobile={isMobile}
            />
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
