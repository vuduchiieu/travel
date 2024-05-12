import { MainLayout } from "@/layout";

function Activity() {
  return (
    <MainLayout>
      <nav className="absolute left-[50%] translate-x-[-50%] flex py-[4px] px-[16px] h-[42px] min-w ">
        <button className="h-[34px] min-w border-[1px] bg-[#000] border-solid boder-[#00000066] px-[16px] mr-[8px] rounded-[10px] ">
          <p className="text-[#fff] font-semibold ">Tất cả</p>
        </button>
        <button className="h-[34px] min-w border-[1px] border-solid boder-[#00000066] px-[16px] mr-[8px] rounded-[10px] ">
          <p className=" font-semibold ">Lượt theo dõi</p>
        </button>
        <button className="h-[34px] min-w border-[1px] border-solid boder-[#00000066] px-[16px] mr-[8px] rounded-[10px] ">
          <p className=" font-semibold ">Trả lời</p>
        </button>
        <button className="h-[34px] min-w border-[1px] border-solid boder-[#00000066] px-[16px] mr-[8px] rounded-[10px] ">
          <p className=" font-semibold ">Lượt nhắc</p>
        </button>
        <button className="h-[34px] min-w border-[1px] border-solid boder-[#00000066] px-[16px] mr-[8px] rounded-[10px] ">
          <p className=" font-semibold ">Lượt trích dẫn</p>
        </button>
        <button className="h-[34px] min-w border-[1px] border-solid boder-[#00000066] px-[16px] mr-[8px] rounded-[10px] ">
          <p className=" font-semibold ">Bài đăng lại</p>
        </button>
        <button className="h-[34px] min-w border-[1px] border-solid boder-[#00000066] px-[16px] rounded-[10px] ">
          <p className=" font-semibold ">Đã xác minh</p>
        </button>
      </nav>
      <div className="max-w-[620px] min-h-[820px] mx-auto mt-[12px] ">
        <div className="flex justify-center items-center w-[100%] h-[321px]">
          <p className="text-[#999999]  font-normal">Chưa có hoạt động nào</p>
        </div>
        {/* <button className="flex justify-between items-center w-[100%] min-h ">
          <Image
            className="w-[48px] rounded-[50%] "
            src={icon.defaultImage}
            alt=""
          />
          <div className="flex justify-between items-center w-[90%] py-[12px] border-b-[1px] border-b-solid boder-b-[#00000066]">
            <div className="flex flex-col items-start w-[410px] min-h ">
              <h3 className="text-[15px] font-semibold">iamzinieee</h3>
              <p className="text-[#999999] font-normal">Đã theo dõi bạn</p>
            </div>
            <button className="h-[34px] min-w-[100px] border-[1px] border-solid boder-[#00000066] px-[16px] rounded-[10px] ">
              <p className="font-semibold">Theo dõi</p>
            </button>
          </div>
        </button> */}
      </div>
    </MainLayout>
  );
}

export default Activity;
