import icon from "@/assets/icon/icon";
import image from "@/assets/picture/image";
import { posts } from "@/data/data";
import Link from "next/link";

export default function Home() {
  console.log(icon.logo);

  return (
    <main className="w-screen h-screen">
      <header className="flex items-center justify-between  bg-[#ffffffd9]  h-[74px] w-[1230px] mx-auto ">
        <Link href={"/"} className="ml-[19px] mr-[68px]">
          <img className="w-[32px]" alt="" src={icon.logo} />
        </Link>
        <nav className="flex items-center justify-center max-w-[620px] h-[74px] px-[70px] ">
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <img className="w-[26px]" src={icon.home} alt="" />
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <img className="w-[26px]" src={icon.search} alt="" />
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <img className="w-[26px]" src={icon.posts} alt="" />
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <img className="w-[26px]" src={icon.heart} alt="" />
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <img className="w-[26px]" src={icon.user} alt="" />
          </button>
        </nav>
        <Link
          href={"/login"}
          className="flex items-center justify-center w-[106px] h-[34px] bg-[#000] rounded-[10px] text-[15px] mr-[13px]"
        >
          <p className="text-[#fff]">Đăng nhập</p>
        </Link>
      </header>
      <div className="max-w-[620px] min-h-[820px]  mx-auto ">
        <div className="relative flex justify-between items-center  h-[68px] py-[16px] before:absolute before:w-[100%] before:h-[1px] before:bg-[#eee] before:bottom-0">
          <img className="w-[36px] rounded-[100%]" src={image.acc1} alt="" />
          <div className="w-[80%]">
            <p className="text-[#999] text-[15px]">Bắt đầu thread...</p>
          </div>
          <button className="h-[36px] w-[68px] rounded-full bg-[#000]">
            <p className="text-[#fff] font-semibold">Đăng</p>
          </button>
        </div>
        <div>
          {posts.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between  py-[12px] relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#e5e5e5] before:bottom-[0]">
                <div className="relative before:absolute before:w-[2px] before:h-[85%] before:bg-[#e5e5e5] before:top-[10%] before:left-[50%] mt-[2%]">
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
                  <div className="flex my-[6px]">
                    <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                      <img
                        style={{ filter: "var(--filter-black) " }}
                        className="w-[22px]"
                        src={icon.heart}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                      <img className="w-[22px]" src={icon.comment} alt="" />
                    </div>
                    <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                      <img className="w-[22px]" src={icon.repost} alt="" />
                    </div>
                    <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                      <img className="w-[22px]" src={icon.share} alt="" />
                    </div>
                  </div>
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
