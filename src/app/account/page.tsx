import Profile from "./Profile";
import UpdateUser from "./UpdateUser";
import { MainLayout } from "@/layout/MainLayout";
import PostAccout from "./PostAccout";

export default function Account() {
  return (
    <MainLayout>
      <Profile />
      <UpdateUser />
      <div className="flex justify-center items-center mb-[16px] h-[74px] w-[100%] ">
        <button className="flex justify-center items-center h-[48px] w-[33%] border-b-[1px] border-b-solid border-[#000]">
          <p className="text-[#000] font-semibold">Bài đăng</p>
        </button>
        <button className="flex justify-center items-center h-[48px] w-[33%] border-b-[1px] border-b-solid border-[#00000026]">
          <p className="text-[#999999] font-semibold">Trả lời</p>
        </button>
        <button className="flex justify-center items-center h-[48px] w-[33%] border-b-[1px] border-b-solid border-[#00000026]">
          <p className="text-[#999999] font-semibold">Đăng lại</p>
        </button>
      </div>
      <PostAccout />
    </MainLayout>
  );
}
