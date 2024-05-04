import Icon from "@/assets/icon/Icon";
import Image from "next/image";

export default function Home() {
  console.log(Icon.logo);

  return (
    <main className="w-screen h-screen">
      <header className="flex items-center justify-between h-[74px] w-[1230px] mx-auto ">
        <div className="ml-[19px] mr-[68px]">
          <Image className="w-[32px]" alt="" src={Icon.logo}></Image>
        </div>
        <nav className="flex items-center justify-center max-w-[620px] h-[74px] px-[70px] ">
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <Image className="w-[26px]" src={Icon.home} alt=""></Image>
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <Image className="w-[26px]" src={Icon.search} alt=""></Image>
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <Image className="w-[26px]" src={Icon.posts} alt=""></Image>
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <Image className="w-[26px]" src={Icon.heart} alt=""></Image>
          </button>
          <button className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]">
            <Image className="w-[26px]" src={Icon.user} alt=""></Image>
          </button>
        </nav>
        <button className="w-[106px] h-[34px] bg-[#000] rounded-[10px] text-[15px] mr-[13px]">
          <p className="text-[#fff]">Đăng nhập</p>
        </button>
      </header>
      <div className="max-w-[620px] h-[1000px] bg-red-500 mx-auto"></div>
    </main>
  );
}
