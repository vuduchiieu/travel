import icon from "@/assets/icon/icon";
import NavContent from "@/components/Navigation/NavContent";
import { posts } from "@/data/data";
import Header from "@/components/Header/Header";
import ImagePost from "@/components/ImagePost/ImagePost";
import NewPosts from "@/components/NewPosts/NewPosts";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <div className="max-w-[620px] min-h-[820px] pt-[74px] mx-auto ">
        <NewPosts />
        <div>
          {posts.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between py-[12px] ">
                <div>
                  <img
                    className=" w-[36px] h-[36px] rounded-[100%] mt-[16px] "
                    src={item.user.avt}
                    alt=""
                  />
                </div>
                <div className="h-[100%] w-[92%]">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold leading-[21px] text-[15px]">
                      {item.user.username}
                    </h3>
                    <p className="flex-[0.95] leading-[21px] font-normal text-[#999999] text-[15px]">
                      {item.createAt}
                    </p>
                    <div
                      style={{ transition: "all 0.5s ease-in-out" }}
                      className="flex justify-center items-center h-[36px] w-[36px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]"
                    >
                      <img className="w-[20px]" src={icon.more} alt="" />
                    </div>
                  </div>
                  <div className="min-h-[30px]  whitespace-pre-wrap">
                    <p>{item.title}</p>
                  </div>
                  <ImagePost src={item.image} />
                  <NavContent />
                  <div className="flex">
                    <p className="text-[#999999] font-normal text-[15px]">
                      <span>{item.comment} thread trả lời</span>
                    </p>
                    <p className="text-[#999999] font-normal text-[15px] ml-[10px]">
                      <span>{item.like} lượt thích</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
