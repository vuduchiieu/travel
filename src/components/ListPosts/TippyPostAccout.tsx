import icon from "@/assets/image/icon";
import Tippy from "@tippyjs/react/headless";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function TippyPostAccout({
  userId,
  postId,
  author,
  fetData,
  fetDataUserId,
}: any) {
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleDeletePost = async () => {
    setIsLoadingDelete(true);
    try {
      await axios.delete(`${process.env.API_URL}/v1/post/${postId}/${userId}`);
      await fetData();
      await fetDataUserId(userId);
      setOpenMore(false);
      setIsLoadingDelete(false);
    } catch (error) {
      setIsLoadingDelete(false);
      console.error(error);
    }
  };

  return (
    userId === author && (
      <div>
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
                  style={
                    isLoadingDelete
                      ? { pointerEvents: "none" }
                      : { pointerEvents: "all" }
                  }
                  onClick={handleDeletePost}
                  className="flex h-[46px] w-[100%]  p-[16px] "
                >
                  {isLoadingDelete ? (
                    <Image
                      width={24}
                      height={24}
                      priority
                      className="animate-spin"
                      src={icon.loading}
                      alt=""
                    />
                  ) : (
                    <p className="text-[15px] text-[red] font-medium">Xóa</p>
                  )}
                </button>
              </div>
            )
          }
          onClickOutside={() => setOpenMore((prev) => !prev)}
        >
          <div
            onClick={() => setOpenMore((prev) => !prev)}
            className="flex justify-center items-center h-[36px] w-[36px] rounded-full cursor-pointer hover:bg-[#f5f5f5]"
          >
            <Image width={20} height={20} src={icon.more} alt="" />
          </div>
        </Tippy>
      </div>
    )
  );
}
