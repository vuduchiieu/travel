import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TippyPostAccout from "./TippyPostAccout";
import icon from "@/assets/image/icon";
import { useAppContext } from "../Context/Context";

function PostItem({ item }: any) {
  const {
    user,
    getTimeAgo,
    setContentAler,
    fetData,
    fetDataUserId,
    toggleModelLogin,
    isMobile,
  } = useAppContext();
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevSlide = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const handleNextSlide = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  return (
    <div key={item._id}>
      <div className="flex justify-between py-[12px] border-b-[1px] border-b-solid boder-b-[#00000066] ">
        <Link href={`/${item.author.email}`}>
          <Image
            width={36}
            height={36}
            style={isMobile ? { marginLeft: 6 } : {}}
            className="rounded-[100%] mt-[6px] "
            src={item.author.image || icon.defaultImage}
            alt=""
          />
        </Link>
        <div
          style={isMobile ? { width: "85%" } : {}}
          className="h-[100%] w-[92%]"
        >
          <div className="flex justify-between items-center">
            <Link href={`/${item.author.email}`}>
              <h3 className="font-semibold leading-[21px] text-[15px] cursor-pointer">
                {item.author.name || item.author.email}
              </h3>
            </Link>
            <p className="flex-[0.95] leading-[21px] font-normal text-[#999999] text-[15px]">
              {getTimeAgo(item.createdAt)}
            </p>
            <TippyPostAccout
              userId={user?.user._id}
              postId={item._id}
              author={item.author._id}
              setContentAler={setContentAler}
              fetData={fetData}
              fetDataUserId={fetDataUserId}
            />
          </div>
          <button
            onClick={() => toggleModelLogin(item)}
            className="min-h-[30px] whitespace-pre-wrap"
          >
            <p className="cursor-pointer">{item.title}</p>
          </button>
          <div className="relative">
            {item.image.length > 1 && (
              <motion.button
                whileHover={{
                  cursor: "pointer",
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                className="absolute left-[-10%] top-[50%] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] bg-[#f5f5f5]"
                onClick={handlePrevSlide}
              >
                <Image width={16} src={icon.arrowleft} alt="" />
              </motion.button>
            )}
            <div
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
              className="flex"
              ref={imageContainerRef}
            >
              {item.image.map((image: any, i: number) => (
                <div className="relative mr-[6px] mt-[8px]" key={i}>
                  <Image
                    unoptimized
                    priority
                    width={0}
                    height={0}
                    style={
                      image.length > 1 ? { width: 430 } : { width: "auto" }
                    }
                    onClick={() => toggleModelLogin(item)}
                    className="max-w-none h-[430px] object-cover rounded-[8px] cursor-pointer"
                    src={image.url}
                    alt=""
                  />
                </div>
              ))}
            </div>
            {item.image.length > 1 && (
              <motion.button
                whileHover={{
                  cursor: "pointer",
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                className="absolute right-[-10%] top-[50%] flex items-center justify-center w-[44px] h-[44px] rounded-[50%] bg-[#f5f5f5]"
                onClick={handleNextSlide}
              >
                <Image width={16} src={icon.arrowright} alt="" />
              </motion.button>
            )}
          </div>

          <div className="flex my-[6px]">
            <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer hover:bg-[#f5f5f5]">
              <Image width={22} height={22} src={icon.heart} alt="" />
            </div>
            <button
              onClick={() => toggleModelLogin(item)}
              className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer hover:bg-[#f5f5f5]"
            >
              <Image width={22} height={22} src={icon.comment} alt="" />
            </button>
            <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer hover:bg-[#f5f5f5]">
              <Image width={22} height={22} src={icon.repost} alt="" />
            </div>
            <div className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer hover:bg-[#f5f5f5]">
              <Image width={22} height={22} src={icon.share} alt="" />
            </div>
          </div>
          <button className="flex" onClick={() => toggleModelLogin(item)}>
            <p className="text-[#999999] font-normal text-[15px] ">
              <span>{item.comment.length} bình luận</span>
            </p>
            <p className="text-[#999999] font-normal text-[15px] ml-[10px] ">
              <span>{item.like.length} lượt thích</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
