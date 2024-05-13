import ImagePost from "@/app/Components/ImagePost";
import NavContent from "@/app/Components/NavContent";
import icon from "@/assets/icon/icon";
import Image from "next/image";
import { useAppContext } from "../Context/Context";
import TippyPostAccout from "./TippyPostAccout";

export default function ListPosts({ posts }: any) {
  const { user, getTimeAgo, setContentAler, setIsRefetch } = useAppContext();

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
              setIsRefetch={setIsRefetch}
            />
          </div>
          <div className="min-h-[30px] whitespace-pre-wrap">
            <p>{item.title}</p>
          </div>
          <ImagePost src={item.image} />
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
