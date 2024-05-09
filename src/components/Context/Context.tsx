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
  isLogin: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const isLogin = status === "authenticated" || status === "loading";

  const [contentAler, setContentAler] = useState<string>("");
  const [openModelLogin, setOpenModelLogin] = useState<boolean>(false);
  const [openModelImage, setOpenModelImage] = useState<boolean>(false);
  const [imageInsideModel, setImageInsideModel] = useState<string>("");

  const toggleModelLogin = () => {
    if (!isLogin) setOpenModelLogin((prev) => !prev);
  };

  const toggleModelImage = (imageUrl: string) => {
    setImageInsideModel(imageUrl);
    setOpenModelImage((prev) => !prev);
    setContentAler("");
  };

  useEffect(() => {
    if (openModelLogin || openModelImage) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModelLogin, openModelImage]);

  useEffect(() => {
    if (contentAler) {
      setTimeout(() => {
        setContentAler("");
      }, 5000);
    }
  }, [contentAler]);

  return (
    <UserContext.Provider
      value={{
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
        isLogin,
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
