import Header from "@/components/Header/Header";
import Profile from "./Profile";

export default function Account() {
  return (
    <>
      <Header />
      <div className="max-w-[620px] min-h-[820px] pt-[74px] px-[24px] mx-auto ">
        <Profile />
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
