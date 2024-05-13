"use client";
import Image from "next/image";
import { useAppContext } from "../Context/Context";
import icon from "@/assets/icon/icon";

export default function ModelPost() {
  const { setOpenModelPosts, insideModel, setInsideModel, getTimeAgo, user } =
    useAppContext();
  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelPosts(false);
      setInsideModel("");
    }
  };

  console.log(insideModel);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelLogin}
    >
      <div className="relative flex justify-center items-center min-w-[80%] h-[90%] bg-[#fff] rounded-[16px] overflow-hidden">
        <button
          onClick={() => {
            setOpenModelPosts(false);
            setInsideModel("");
          }}
          className="absolute top-[2%] left-[2%] flex items-center justify-center h-[44px] w-[44px] rounded-[50%] bg-[#1e1e1e]  hover:scale-[1.07]"
        >
          <Image
            width={18}
            height={18}
            style={{ filter: "var(--filter-grey)" }}
            src={icon.close}
            alt=""
          />
        </button>
        {insideModel && (
          <div className="w-[75%] h-[100%] bg-[#000]">
            <Image
              width={0}
              height={0}
              className="mx-auto h-[100%] w-auto"
              src={insideModel?.image[0]?.url}
              alt=""
            />
          </div>
        )}
        <div className="w-[25%] h-[100%] p-[20px]">
          <div className=" w-[100%] h-[100%]">
            <div className="flex items-center h-[72px] mb-[6px]">
              <Image
                width={50}
                height={50}
                className="rounded-[50%]"
                src={insideModel.author.image}
                alt=""
              />
              <div className="ml-[10px]">
                <h3 className="font-semibold leading-[21px] text-[15px]">
                  {insideModel.author.name}
                </h3>
                <p className="flex-[0.95] leading-[21px] font-normal text-[#999999] text-[15px]">
                  {getTimeAgo(insideModel.createdAt)}
                </p>
              </div>
            </div>
            <div className="min-h-[30px] whitespace-pre-wrap mb-[6px]">
              <p>{insideModel.title}</p>
            </div>
            <div className="flex mb-[16px]">
              <p className="text-[#999999] font-normal text-[15px]">
                <span>9 bình luận</span>
              </p>
              <p className="text-[#999999] font-normal text-[15px] ml-[10px]">
                <span> lượt thích</span>
              </p>
            </div>
            <nav className="flex justify-around mb-[16px] border-y-[1px] border-y-solid boder-y-[#00000066]">
              <button className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer   hover:bg-[#f5f5f5]">
                <Image
                  width={24}
                  height={24}
                  style={{ filter: "var(--filter-black)" }}
                  src={icon.heart}
                  alt=""
                />
              </button>
              <button className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                <Image width={22} height={22} src={icon.comment} alt="" />
              </button>
              <button className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                <Image width={22} height={22} src={icon.repost} alt="" />
              </button>
              <button className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer  hover:bg-[#f5f5f5]">
                <Image width={22} height={22} src={icon.share} alt="" />
              </button>
            </nav>
            <div className="mb-[16px] overflow-y-auto h-[500px]">
              <div className="flex items-start mb-[12px]">
                <Image width={28} height={28} src={icon.defaultImage} alt="" />
                <div className="max-w-[280px] px-[16px] py-[4px] min-h bg-[#eee] ml-[6px] rounded-[12px]">
                  <h3 className="font-semibold">user</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Blanditiis animi fuga ullam labore sunt adipisci? Alias ut
                    delectus soluta perspiciatis sint hic? Labore ratione vero
                    libero nihil obcaecati rerum saepe at, repellat doloremque
                    minima architecto quae magnam enim commodi eaque amet
                    inventore veniam, cum facilis? Maxime quia veniam est nisi,
                    sit blanditiis id expedita iure odio officiis omnis
                    delectus! Minus quod, nostrum odio eaque aut exercitationem
                    sint impedit id voluptas repellat sunt? Harum, amet?
                    Corrupti quasi saepe labore porro, consectetur ratione! In
                    fuga repudiandae saepe ratione architecto libero, placeat
                    porro consequatur modi non fugit voluptatum vero ea! Qui,
                    alias numquam?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between h-[78px]">
              <Image
                width={32}
                height={32}
                className="h-[32px] rounded-[50%]"
                src={user.user.image}
                alt=""
              />
              <form className="relative bg-[#eee] w-[88%] overflow-hidden rounded-[16px] ">
                <input
                  style={{ outline: "none", backgroundColor: "transparent" }}
                  type="text"
                  className="h-[60%] w-[100%] px-[10px]"
                  placeholder={`Bình luận với vai trò: ${
                    user.user.name || user.user.email
                  }`}
                />
                <button
                  className="absolute bottom-[10%] right-[5%]"
                  type="submit"
                >
                  <Image
                    width={24}
                    height={24}
                    priority
                    className="animate-spin"
                    src={icon.loading}
                    alt=""
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
