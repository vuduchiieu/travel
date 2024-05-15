"use client";
import Image from "next/image";
import { useAppContext } from "../Context/Context";
import icon from "@/assets/icon/icon";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Link from "next/link";

interface User {
  _id: string;
  name: string;
  image: string;
  email: string;
}

interface Comment {
  _id: string;
  content: string;
  user: User;
  post: {
    _id: string;
    author: string;
  };
}

export default function ModelPost() {
  const {
    setOpenModelPosts,
    insideModel,
    setInsideModel,
    getTimeAgo,
    user,
    setContentAler,
    fetData,
    isMobile,
  } = useAppContext();

  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelPosts(false);
      setInsideModel("");
    }
  };
  const [content, setContent] = useState<string>("");
  const [isLoadingSendComment, setIsLoadingSendComment] =
    useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<{
    [key: string]: boolean;
  }>({});
  const [comments, setComments] = useState<Comment[]>(insideModel.comment);

  useEffect(() => {
    setComments(insideModel.comment);
  }, [insideModel]);

  const handleSendComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) {
      return setContentAler("Bạn chưa nhập bình luận");
    }
    setIsLoadingSendComment(true);
    try {
      const newComment = {
        content,
      };
      const response = await axios.post(
        `${process.env.API_URL}/v1/comment/${insideModel._id}/${user.user._id}`,
        newComment
      );
      const decodedToken: any = jwtDecode(response.data);
      const comment = {
        ...decodedToken.comment,
        user: {
          _id: user.user._id,
          name: user.user.name,
          image: user.user.image,
          email: user.user.email,
        },
      };
      setComments((prevComments: Comment[]) => [...prevComments, comment]);
      setContent("");
      await fetData();
      setIsLoadingSendComment(false);
    } catch (error) {
      setIsLoadingSendComment(false);
      console.error(error);
    }
  };

  const handleDeleTeComment = async (item: Comment) => {
    setIsLoadingDelete((prev) => ({ ...prev, [item._id]: true }));
    try {
      if (
        user.user._id === item.user._id ||
        user.user._id === item.post?.author
      ) {
        await axios.delete(
          `${process.env.API_URL}/v1/comment/${item.post._id}/${item.user._id}/${item._id}`
        );
        await fetData();
        setComments((prev) =>
          prev.filter((comment) => comment._id !== item._id)
        );
        setIsLoadingDelete((prev) => ({ ...prev, [item._id]: false }));
      }
    } catch (error) {
      setIsLoadingDelete((prev) => ({ ...prev, [item._id]: false }));
      console.error(error);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[1]"
      onClick={handleCloseModelLogin}
    >
      <div
        style={
          isMobile
            ? {
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
                height: "100%",
              }
            : {}
        }
        className="relative flex justify-center items-center w-[85%] h-[85%] bg-[#fff] rounded-[16px] overflow-hidden"
      >
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
          <div
            style={
              isMobile
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }
                : {}
            }
            className="w-[77%] h-[100%] bg-[#000]"
          >
            <Image
              width={0}
              height={0}
              className="mx-auto max-h-[100%] w-auto"
              src={insideModel?.image[0]?.url}
              alt=""
            />
          </div>
        )}

        {!isMobile && (
          <div className="w-[23%] h-[100%] p-[20px]">
            <div className=" relative w-[100%] h-[100%]">
              <div className="flex  items-center h-[72px] mb-[6px]">
                <Link
                  href={`/${insideModel.author.email}`}
                  onClick={() => setOpenModelPosts(false)}
                >
                  <Image
                    width={50}
                    height={50}
                    className="rounded-[50%]"
                    src={insideModel.author.image}
                    alt=""
                  />
                </Link>
                <div className="ml-[10px]">
                  <Link
                    href={`/${insideModel.author.email}`}
                    onClick={() => setOpenModelPosts(false)}
                  >
                    <h3 className="font-semibold leading-[21px] text-[15px]">
                      {insideModel.author.name}
                    </h3>
                  </Link>
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
                  <span>{comments.length} bình luận</span>
                </p>
                <p className="text-[#999999] font-normal text-[15px] ml-[10px]">
                  <span>{insideModel.like.length} lượt thích</span>
                </p>
              </div>
              <nav className="flex justify-around mb-[16px] border-y-[1px] border-y-solid boder-y-[#00000066]">
                <button className="flex justify-center items-center h-[36px] w-[36px] ml-[3px] rounded-full cursor-pointer   hover:bg-[#f5f5f5]">
                  <Image width={24} height={24} src={icon.heart} alt="" />
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
              <div className="mb-[16px] overflow-y-auto h-[63%]">
                {comments.map((item: any) => (
                  <div
                    key={item._id}
                    className=" flex items-start min-w mb-[12px]"
                  >
                    <Link
                      href={`/${item.user.email}`}
                      onClick={() => setOpenModelPosts(false)}
                      className="min-w-[32px] h-[32px]"
                    >
                      <Image
                        width={32}
                        height={32}
                        className="rounded-[50%] "
                        src={item.user.image}
                        alt=""
                      />
                    </Link>
                    <div className="relative min-w-[90px] px-[16px] py-[4px] min-h-[60px] bg-[#eee] ml-[6px] rounded-[12px]">
                      <Link
                        href={`/${item.user.email}`}
                        onClick={() => setOpenModelPosts(false)}
                      >
                        <h3 className="font-semibold">
                          {item.user.name || item.user.email}
                        </h3>
                      </Link>
                      <p>{item.content}</p>
                      {(user.user._id === item.user._id ||
                        user.user._id === item.post.author) && (
                        <button
                          style={
                            isLoadingDelete[item._id]
                              ? { pointerEvents: "none" }
                              : { pointerEvents: "all" }
                          }
                          onClick={() => handleDeleTeComment(item)}
                          className="absolute right-[3%] top-[3%] ml-[6px]"
                        >
                          {isLoadingDelete[item._id] ? (
                            <Image
                              width={18}
                              height={18}
                              className="animate-spin"
                              src={icon.loading}
                              alt=""
                            />
                          ) : (
                            <Image
                              width={16}
                              height={16}
                              src={icon.close}
                              alt=""
                            />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex absolute bottom-[-2%] justify-between h-[78px] w-[100%] bg-[#fff] ">
                <Image
                  width={32}
                  height={32}
                  className="h-[32px] rounded-[50%]"
                  src={user.user.image}
                  alt=""
                />
                <form
                  onSubmit={handleSendComment}
                  className="relative bg-[#eee] w-[88%] overflow-hidden rounded-[16px] "
                >
                  <input
                    style={{ outline: "none", backgroundColor: "transparent" }}
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="h-[60%] w-[100%] px-[10px]"
                    placeholder={`Bình luận với vai trò: ${
                      user.user.name || user.user.email
                    }`}
                  />
                  <button
                    className="absolute bottom-[10%] right-[5%]"
                    type="submit"
                    style={
                      isLoadingSendComment
                        ? { pointerEvents: "none" }
                        : { pointerEvents: "all" }
                    }
                  >
                    {isLoadingSendComment ? (
                      <Image
                        width={24}
                        height={24}
                        priority
                        className="animate-spin"
                        src={icon.loading}
                        alt=""
                      />
                    ) : (
                      <Image
                        width={28}
                        height={28}
                        priority
                        src={icon.send}
                        alt=""
                      />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
