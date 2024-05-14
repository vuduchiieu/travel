"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useMediaQuery } from "react-responsive";

interface UserContextType {
  openModelUpdateUser: boolean;
  setOpenModelUpdateUser: (newState: boolean) => void;
  openModelPosts: boolean;
  setOpenModelPosts: (newState: boolean) => void;
  openModelNewPosts: boolean;
  setOpenModelNewPosts: (newState: boolean) => void;
  toggleModelNewPost: () => void;
  openModelLogin: boolean;
  setOpenModelLogin: (newState: boolean) => void;
  toggleModelLogin: (item: any) => void;
  contentAler: string;
  setContentAler: (newState: string) => void;
  insideModel: any;
  setInsideModel: (newState: any) => void;
  user?: any;
  getTimeAgo: (createdAt: string) => string;
  posts: any[];
  setPosts: (newState: any[]) => void;
  fetData: () => Promise<void>;
  fetDataUserId: (id: string) => Promise<void>;
  postsId: any[];
  setPostsId: (newState: any[]) => void;
  isMobile: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [posts, setPosts] = useState<any[]>([]);
  const fetData = async () => {
    const response = await axios.get(`${process.env.API_URL}/v1/post/`);
    setPosts(response.data.data);
  };
  const [postsId, setPostsId] = useState<any[]>([]);

  const fetDataUserId = async (id: string) => {
    const response = await axios.get(`${process.env.API_URL}/v1/post/${id}`);
    setPostsId(response.data.data);
  };

  const { data: session, status } = useSession();

  const [contentAler, setContentAler] = useState<string>("");
  const [openModelUpdateUser, setOpenModelUpdateUser] =
    useState<boolean>(false);
  const [openModelPosts, setOpenModelPosts] = useState<boolean>(false);
  const [openModelNewPosts, setOpenModelNewPosts] = useState<boolean>(false);
  const [openModelLogin, setOpenModelLogin] = useState<boolean>(false);

  const [insideModel, setInsideModel] = useState<string>("");

  const toggleModelNewPost = () => {
    setOpenModelNewPosts((prev) => !prev);
  };

  const toggleModelLogin = (item: any) => {
    if (status === "unauthenticated") {
      setOpenModelLogin((prev) => !prev);
    } else if (status === "authenticated") {
      setOpenModelPosts(true);
      if (item) setInsideModel(item);
    }
  };

  useEffect(() => {
    if (openModelLogin || openModelPosts || openModelUpdateUser) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModelLogin, openModelPosts, openModelUpdateUser]);

  useEffect(() => {
    if (contentAler) {
      setTimeout(() => {
        setContentAler("");
      }, 5000);
    }
  }, [contentAler]);

  function getTimeAgo(createdAt: string) {
    const createdDate = new Date(createdAt);

    if (isNaN(createdDate.getTime())) {
      return "Ngày đăng không hợp lệ";
    }

    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    if (hoursDiff <= 24) {
      return hoursDiff === 0 ? "vài phút trước" : `${hoursDiff} giờ trước`;
    } else {
      return `${createdDate.getDate()}/${
        createdDate.getMonth() + 1
      }/${createdDate.getFullYear()}`;
    }
  }

  return (
    <UserContext.Provider
      value={{
        openModelUpdateUser,
        setOpenModelUpdateUser,
        toggleModelNewPost,
        openModelPosts,
        setOpenModelPosts,
        openModelNewPosts,
        setOpenModelNewPosts,
        toggleModelLogin,
        openModelLogin,
        setOpenModelLogin,
        contentAler,
        setContentAler,
        insideModel,
        setInsideModel,
        user: session,
        getTimeAgo,
        posts,
        setPosts,
        fetData,
        fetDataUserId,
        postsId,
        setPostsId,
        isMobile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAppContext phải được sử dụng trong UserProvider");
  }
  return context;
};
