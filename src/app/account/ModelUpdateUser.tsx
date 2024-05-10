"use client";

import icon from "@/assets/icon/icon";
import { useAppContext } from "@/components/Context/Context";
import { useEffect, useState } from "react";

export default function ModelUpdateUser() {
  const { user, setOpenModelUpdateUser, setContentAler } = useAppContext();
  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelUpdateUser(false);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const newUser = {};

  const handleSubmit = () => {};

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelLogin}
    >
      <div className="flex flex-col items-center p-[24px] w-[520px] min-h bg-[#fff] z-[1] rounded-[16px]">
        <form onSubmit={handleSubmit} className=" w-[100%]">
          <div className="flex">
            <div className=" w-[402px] pb-[16px] ">
              <h4 className="text-[15px] font-semibold">Tên</h4>
              {user.user.provider === "google" ? (
                <div
                  onClick={() =>
                    setContentAler(
                      "Tài khoản của bạn được liên kết với tài khoản Google và không thể thay đổi được ở đây."
                    )
                  }
                  className="flex items-center pb-[14px] text-[15px] border-b-[1px] border-b-solid boder-b-[#00000066] cursor-not-allowed"
                >
                  <img width={14} src={icon.lock} alt="" />
                  <span className="ml-[4px]">{user?.user.name}</span>
                  <span className="ml-[4px]">({user?.user.email})</span>
                </div>
              ) : (
                <div className="flex pb-[14px] border-b-[1px] border-b-solid boder-b-[#00000066]">
                  <input
                    className="w-[50px] text-[15px]"
                    style={{ outline: "none" }}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={user?.user.name}
                  />
                  <input
                    style={{ outline: "none" }}
                    type="email"
                    placeholder={user?.user.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-[4px] text-[15px]"
                  />
                </div>
              )}
            </div>
            <img
              className="w-[52px] h-[52px] rounded-[50%]"
              src={user?.user.image || icon.defaultImage}
              alt=""
            />
          </div>
          <div className="flex">
            <div className=" w-[100%] pb-[16px] ">
              <h4 className="text-[15px] font-semibold">Tiểu sử</h4>
              <input
                type="text"
                style={{ outline: "none" }}
                placeholder="+ Viết tiểu sử"
                className="text-[15px] w-[100%]  pb-[14px] border-b-[1px] border-b-solid boder-b-[#00000066]"
              ></input>
            </div>
          </div>
          <div className="flex">
            <div className=" w-[100%] pb-[16px] ">
              <h4 className="text-[15px] font-semibold">Liên kết</h4>
              <input
                type="text"
                style={{ outline: "none" }}
                placeholder="+ Thêm liên kết"
                className="text-[15px] w-[100%]  pb-[14px] border-b-[1px] border-b-solid boder-b-[#00000066]"
              ></input>
            </div>
          </div>
          <button
            className="flex justify-center items-center h-[52px] w-[100%] mt-[16px]  px-[16px] rounded-[10px] bg-[#000]"
            type="submit"
          >
            <p className="text-[#fff] font-semibold">Xong</p>
          </button>
        </form>
      </div>
    </div>
  );
}
