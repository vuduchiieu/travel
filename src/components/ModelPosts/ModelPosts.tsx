"use client";

import icon from "@/assets/icon/icon";
import { useAppContext } from "../Context/Context";
import { useEffect, useState } from "react";
import TippySelectPrivatePost from "./TippySelectPrivatePost";
import Image from "next/image";

export default function ModelPosts() {
  const { user, setOpenModelPosts, setContentAler } = useAppContext();
  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelPosts(false);
    }
  };

  const [image, setImage] = useState<File | any>(null);
  const [imagePreView, setImagePreview] = useState("");
  const [select, SetSelect] = useState(
    "Bất kỳ ai cũng có thể xem và bình luận bài viết"
  );

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      setImage(files[0]);
    }

    if (files?.[0].type === "video/mp4") {
      setContentAler("Xin lỗi! tạm thời chúng tôi chưa hỗ trợ video");
    }
    e.target.value = "";
  };

  useEffect(() => {
    if (image) {
      const imageURL = URL.createObjectURL(image);
      setImagePreview(imageURL);
      return () => {
        URL.revokeObjectURL(imageURL);
      };
    }
  }, [image]);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelLogin}
    >
      <div className="flex flex-col items-center rounded-[16px]">
        <div className="h-[46px] min-w">
          <h3 className="text-[#fff] text-[16px] font-bold">Bài viết mới</h3>
        </div>
        <div className="flex flex-col mt-[8px] p-[24px] w-[620px] min-h bg-[#fff] rounded-[16px]">
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
                <button className="flex justify-center items-center w-[36px] h-[36px]">
                  <input
                    className="hidden"
                    type="file"
                    id="file"
                    onChange={handleAddImage}
                  />
                  <label className="cursor-pointer" htmlFor="file">
                    <Image
                      width={20}
                      height={20}
                      className="w-[20px]"
                      src={icon.photo}
                      alt=""
                    />
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-[44px] ">
            <TippySelectPrivatePost select={select} SetSelect={SetSelect} />
            <button className="flex justify-center items-center px-[16px] h-[36px] rounded-full  bg-[#000]">
              <p className="text-[#fff] text-[15px] font-semibold">Đăng</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
