"use client";

import icon from "@/assets/icon/icon";
import { useAppContext } from "@/components/Context/Context";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function ModelUpdateUser() {
  const { user, setOpenModelUpdateUser, setContentAler } = useAppContext();
  const { update } = useSession();

  const handleCloseModelUpdateUser = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelUpdateUser(false);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatart] = useState<File | undefined>(undefined);
  const [story, setStory] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [isLoadingSubmit, setIsloadingSubmit] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = new FormData();
    setIsloadingSubmit(true);
    try {
      if (avatar) {
        newUser.append("images", avatar);
      }
      if (story) {
        newUser.append("story", story);
      }
      if (name) {
        newUser.append("name", name);
      }
      if (email) {
        newUser.append("email", email);
      }
      const response = await axios.put(
        `${process.env.API_URL}/v1/user/${user?.user._id}`,
        newUser
      );
      const decodedToken: any = jwtDecode(response.data);
      update(decodedToken.user);
      setOpenModelUpdateUser(false);
      setIsloadingSubmit(false);
    } catch (error) {
      setIsloadingSubmit(false);
    }
  };

  useEffect(() => {
    if (avatar) {
      const imageURL = URL.createObjectURL(avatar);
      setAvatarPreview(imageURL);
      return () => {
        URL.revokeObjectURL(imageURL);
      };
    }
  }, [avatar]);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelUpdateUser}
    >
      <div className="flex flex-col items-center p-[24px] w-[520px] min-h bg-[#fff] z-[1] rounded-[16px]">
        <form onSubmit={handleSubmit} className=" w-[100%]">
          <div className="flex">
            <div className=" w-[402px] pb-[16px] ">
              <h4 className="text-[15px] font-semibold">Tên</h4>
              {user?.user.provider === "google" ? (
                <div
                  onClick={() =>
                    setContentAler(
                      "Tài khoản của bạn được liên kết với tài khoản Google và không thể thay đổi được ở đây."
                    )
                  }
                  className="flex items-center pb-[14px] text-[15px] border-b-[1px] border-b-solid boder-b-[#00000066] cursor-not-allowed"
                >
                  <Image width={14} height={14} src={icon.lock} alt="" />
                  <p className="">{user?.user.name}</p>
                </div>
              ) : (
                <div className=" w-[100%] pb-[16px] ">
                  <input
                    type="text"
                    style={{ outline: "none" }}
                    placeholder={user?.user.name || "Chưa được đặt tên"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-[15px] w-[100%]  pb-[14px] border-b-[1px] border-b-solid boder-b-[#00000066]"
                  />
                </div>
              )}
            </div>
            <input
              style={{ display: "none" }}
              id="avatart"
              type={user?.user.provider === "google" ? "text" : "file"}
              onChange={(e) => {
                if (e.target.files) {
                  setAvatart(e.target.files[0]);
                }
              }}
            />
            <label htmlFor="avatart">
              <Image
                width={52}
                height={52}
                className="rounded-[50%]"
                src={avatarPreview || user?.user.image || icon.defaultImage}
                alt=""
              />
            </label>
          </div>
          <div className="w-[100%] pb-[16px] ">
            <h4 className="text-[15px] font-semibold">Email</h4>
            {user?.user.provider === "google" ? (
              <div
                onClick={() =>
                  setContentAler(
                    "Tài khoản của bạn được liên kết với tài khoản Google và không thể thay đổi được ở đây."
                  )
                }
                className="flex items-center pb-[14px] text-[15px] border-b-[1px] border-b-solid boder-b-[#00000066] cursor-not-allowed"
              >
                <Image width={14} height={14} src={icon.lock} alt="" />
                <p className="">{user?.user.email}</p>
              </div>
            ) : (
              <div className=" w-[100%] pb-[16px] ">
                <input
                  type="text"
                  style={{ outline: "none" }}
                  placeholder={user?.user.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[15px] w-[100%]  pb-[14px] border-b-[1px] border-b-solid boder-b-[#00000066]"
                />
              </div>
            )}
          </div>
          <div className=" w-[100%] pb-[16px]">
            <h4 className="text-[15px] font-semibold">Tiểu sử</h4>
            <input
              type="text"
              style={{ outline: "none" }}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder={user?.user.story || "+ Viết tiểu sử"}
              className="text-[15px] w-[100%]  pb-[14px] border-b-[1px] border-b-solid boder-b-[#00000066]"
            />
          </div>
          <button
            style={
              isLoadingSubmit
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
            className="flex justify-center items-center h-[52px] w-[100%] mt-[16px]  px-[16px] rounded-[10px] bg-[#000]"
            type="submit"
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
              <p className="text-[#fff] font-semibold">Xong</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
