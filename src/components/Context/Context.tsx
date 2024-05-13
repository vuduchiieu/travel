"use client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface UserContextType {
  openModelUpdateUser: boolean;
  setOpenModelUpdateUser: (newState: boolean) => void;
  openModelPosts: boolean;
  setOpenModelPosts: (newState: boolean) => void;
  toggleModelPost: () => void;
  openModelLogin: boolean;
  setOpenModelLogin: (newState: boolean) => void;
  toggleModelLogin: () => void;
  contentAler: string;
  setContentAler: (newState: string) => void;
  imageInsideModel?: string;
  openModelImage: boolean;
  setOpenModelImage: (newState: boolean) => void;
  toggleModelImage: (imageUrl: string) => void;
  user?: any;
  getTimeAgo: any;
  isRefetch: boolean;
  setIsRefetch: (newState: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  const [contentAler, setContentAler] = useState<string>("");
  const [openModelUpdateUser, setOpenModelUpdateUser] =
    useState<boolean>(false);
  const [openModelPosts, setOpenModelPosts] = useState<boolean>(false);
  const [openModelLogin, setOpenModelLogin] = useState<boolean>(false);
  const [openModelImage, setOpenModelImage] = useState<boolean>(false);
  const [imageInsideModel, setImageInsideModel] = useState<string>("");

  const toggleModelPost = () => {
    setOpenModelPosts((prev) => !prev);
  };

  const toggleModelLogin = () => {
    if (status === "unauthenticated") setOpenModelLogin((prev) => !prev);
  };

  const toggleModelImage = (imageUrl: string) => {
    setImageInsideModel(imageUrl);
    setOpenModelImage((prev) => !prev);
    setContentAler("");
  };

  useEffect(() => {
    if (
      openModelLogin ||
      openModelImage ||
      openModelPosts ||
      openModelUpdateUser
    ) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModelLogin, openModelImage, openModelPosts, openModelUpdateUser]);

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

  const [isRefetch, setIsRefetch] = useState(true);

  return (
    <UserContext.Provider
      value={{
        openModelUpdateUser,
        setOpenModelUpdateUser,
        toggleModelPost,
        openModelPosts,
        setOpenModelPosts,
        openModelLogin,
        setOpenModelLogin,
        toggleModelLogin,
        contentAler,
        setContentAler,
        toggleModelImage,
        imageInsideModel,
        openModelImage,
        setOpenModelImage,
        user: session,
        getTimeAgo,
        isRefetch,
        setIsRefetch,
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
