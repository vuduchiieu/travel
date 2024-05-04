import icon from "@/assets/icon/icon";
import Link from "next/link";

export default function Home() {
  console.log(icon.logo);

  return (
    <main className="w-screen h-screen">
      <header className="flex items-center justify-between sticky bg-[#ffffffd9] top-0 h-[74px] w-[1230px] mx-auto ">
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
      <div className="max-w-[620px] h-[1000px] bg-red-500 mx-auto"></div>
    </main>
  );
}
