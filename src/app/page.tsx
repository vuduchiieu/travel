import Link from "next/link";

import icon from "@/assets/icon/icon";
import NavContent from "@/components/Navigation/NavContent";
import NavHeader from "@/components/Navigation/NavHeader";
import { posts } from "@/data/data";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <header className="flex items-center justify-between fixed  top-0 left-0 right-0 bg-[#fff] h-[74px] w-[1230px] mx-auto z-[1]">
        <Link href={"/"} className="ml-[19px] mr-[68px]">
          <img className="w-[32px]" alt="" src={icon.logo} />
        </Link>
        <NavHeader />
        <Link
          href={"/login"}
          className="flex items-center justify-center w-[106px] h-[34px] bg-[#000] rounded-[10px] text-[15px] mr-[13px]"
        >
          <p className="text-[#fff]">Đăng nhập</p>
        </Link>
      </header>
      <div className="max-w-[620px] min-h-[820px] pt-[74px] mx-auto ">
        {/* <div className=" flex justify-between items-center  h-[68px] py-[16px] ">
            <img className="w-[36px] rounded-[100%]" src={image.acc1} alt="" />
            <div className="w-[80%]">
              <p className="text-[#999] text-[15px]">Bắt đầu thread...</p>
            </div>
            <button className="h-[36px] w-[68px] rounded-full bg-[#000]">
              <p className="text-[#fff] font-semibold">Đăng</p>
            </button>
          </div> */}
        <div>
          {posts.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between  py-[12px] ">
                <div>
                  <img
                    className=" w-[36px] h-[36px] rounded-[100%] "
                    src={item.user.avt}
                    alt=""
                  />
                </div>
                <div className="h-[100%] w-[calc(92%)]">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold leading-[21px] text-[15px]">
                      {item.user.username}
                    </h3>
                    <p className="flex-[0.95] leading-[21px] font-normal text-[#999999] text-[15px]">
                      {item.createAt}
                    </p>
                    <div
                      style={{ transition: "all 0.5s ease-in-out" }}
                      className="flex justify-center items-center h-[36px] w-[36px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
                    >
                      <img className="w-[20px]" src={icon.more} alt="" />
                    </div>
                  </div>
                  <div className="min-h-[30px]  whitespace-pre-wrap">
                    <p>{item.title}</p>
                  </div>
                  <img
                    className="max-h-[430px] object-cover rounded-[8px] mt-[8px] "
                    src={item.image}
                    alt=""
                  />
                  <NavContent />
                  <div className="flex">
                    <p className="text-[#999999] font-normal text-[15px]">
                      <span>{item.comment} thread trả lời</span>
                    </p>
                    <p className="text-[#999999] font-normal text-[15px] ml-[10px]">
                      <span>{item.like} lượt thích</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
