"use client";
import icon from "@/assets/icon/icon";
import { useAppContext } from "@/components/Context/Context";
import Header from "@/components/Header/Header";
import Link from "next/link";

export default function Account() {
  const { user } = useAppContext();

  return (
    <>
      <Header />
      <div className="max-w-[620px] min-h-[820px] pt-[74px] px-[24px] mx-auto ">
        <div className="min-h-[195px] pt-[16px] pb-[10px] ">
          <div className="flex justify-between items-center h-[84px]">
            <div className="w-[472px] h-[56px] ">
              <h2 className="font-semibold text-[24px]">{user?.user.email}</h2>
              <p className="font-light text-[15px]">{user?.user.name}</p>
            </div>

            <img
              className="w-[84px] object-cover rounded-[50%]"
              src={user?.user.image || icon.defaultImage}
              alt=""
            />
          </div>
          <div className="min-h-[74px] mt-[16px]">
            <p className="font-normal text-[15px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus, accusamus consequatur. Sed, soluta aspernatur
              explicabo dicta nulla temporibus possimus est.
            </p>
          </div>
          <div className="flex justify-between items-center h-[36px] mt-[12px]">
            <p className="font-normal text-[15px] text-[#999999]">
              4 người theo dõi
            </p>
            <Link href={"https://myaccount.google.com"} target="_blank">
              <img className="w-[24px]" src={icon.google} alt="" />
            </Link>
          </div>
        </div>
        <button className="flex justify-center items-center h-[34px] w-[100%] py-[12px] border border-solid border-[#00000026] rounded-[10px]">
          <p className="font-medium text-[15px]">Chỉnh sửa trang cá nhân</p>
        </button>
        <div className="flex justify-center items-center mb-[16px] h-[74px] w-[100%] ">
          <button className="flex  justify-center items-center h-[48px] w-[33%] border-b-[1px] border-b-solid border-[#000]">
            <p className="text-[#000]">Bài đăng</p>
          </button>
          <button className="flex  justify-center items-center h-[48px] w-[33%] border-b-[1px] border-b-solid border-[#00000026]">
            <p className="text-[#999999]">Trả lời</p>
          </button>
          <button className="flex  justify-center items-center h-[48px] w-[33%] border-b-[1px] border-b-solid border-[#00000026]">
            <p className="text-[#999999]">Đăng lại</p>
          </button>
        </div>
        <div className="flex justify-center items-center min-h-[270px]">
          <button className="flex justify-center items-center h-[34px] min-w-[50%] py-[12px] border border-solid border-[#00000026] rounded-[10px]">
            <p className="font-medium text-[15px]">
              Bắt đầu tạo bài đăng đầu tiên
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
