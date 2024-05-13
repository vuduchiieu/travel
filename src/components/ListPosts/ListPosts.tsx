import icon from "@/assets/icon/icon";
import Image from "next/image";
import { useAppContext } from "../Context/Context";
import TippyPostAccout from "./TippyPostAccout";
import NavContent from "./NavContent";

export default function ListPosts({ posts }: any) {
  const {
    user,
    getTimeAgo,
    setContentAler,
    fetData,
    fetDataUserId,
    toggleModelLogin,
  } = useAppContext();

  return posts.map((item: any) => (
    <div key={item._id}>
      <div className="flex justify-between py-[12px] border-b-[1px] border-b-solid boder-b-[#00000066] ">
        <div>
          <Image
            width={36}
            height={36}
            className="rounded-[100%] mt-[16px] "
            src={item.author.image || icon.defaultImage}
            alt=""
          />
        </div>
        <div className="h-[100%] w-[92%]">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold leading-[21px] text-[15px]">
              {item.author.name}
            </h3>
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
          <div className="min-h-[30px] whitespace-pre-wrap">
            <p>{item.title}</p>
          </div>
          {item.image[0]?.url && (
            <Image
              width={0}
              height={0}
              priority
              onClick={() => toggleModelLogin("comment", item)}
              className="h-[430px] w-auto object-cover rounded-[8px] mt-[8px] cursor-pointer "
              src={item.image[0]?.url}
              alt=""
            />
          )}
          <NavContent />
          <div className="flex">
            <p className="text-[#999999] font-normal text-[15px]">
              <span>9 bình luận</span>
            </p>
            <p className="text-[#999999] font-normal text-[15px] ml-[10px]">
              <span> lượt thích</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}
