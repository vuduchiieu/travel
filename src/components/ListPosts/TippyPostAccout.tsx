import icon from "@/assets/icon/icon";
import Tippy from "@tippyjs/react/headless";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function TippyPostAccout({
  userId,
  postId,
  author,
  setContentAler,
  setIsRefetch,
}: any) {
  const [openMore, setOpenMore] = useState<boolean>(false);

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(
        `${process.env.API_URL}/v1/post/${postId}/${userId}`
      );
      setContentAler(res.data);
      setOpenMore(false);
      setIsRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      visible={openMore}
      render={(attrs) =>
        author == userId && (
          <div
            tabIndex={-1}
            {...attrs}
            className="w-[174px] min-h rounded-[16px] outline-[0.5px] outline-[#00000026] bg-[#fff] outline shadow-md"
          >
            <button className="flex h-[46px] w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] p-[16px] ">
              <p className="text-[15px] font-medium">Sửa bài viết</p>
            </button>
            <button
              onClick={handleDeletePost}
              className="flex h-[46px] w-[100%]  p-[16px] "
            >
              <p className="text-[15px] text-[red] font-medium">Xóa</p>
            </button>
          </div>
        )
      }
      onClickOutside={() => setOpenMore((prev) => !prev)}
    >
      <div
        onClick={() => setOpenMore((prev) => !prev)}
        style={
          author != userId ? { cursor: "not-allowed" } : { cursor: "pointer" }
        }
        className="flex justify-center items-center h-[36px] w-[36px] rounded-full  hover:bg-[#f5f5f5]"
      >
        <Image width={20} height={20} src={icon.more} alt="" />
      </div>
    </Tippy>
  );
}
