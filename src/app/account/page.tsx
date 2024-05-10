import Header from "@/components/Header/Header";
import Profile from "./Profile";
import FirstPost from "./FirstPost";
import UpdateUser from "./UpdateUser";

export default function Account() {
  return (
    <>
      <Header />
      <div className="max-w-[620px] min-h-[820px] pt-[74px] px-[24px] mx-auto ">
        <Profile />
        <UpdateUser />
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
        <FirstPost />
      </div>
    </>
  );
}
