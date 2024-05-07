"use client";
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
  imageInsideModel: string;
  openModelImage: boolean;
  setOpenModelImage: (newState: boolean) => void;
  toggleModelImage: (imageUrl: any) => void;
  user: any;
  isLogin: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: user, status } = useSession();
  const isLogin =
    status === "authenticated" || status === "loading" ? true : false;

  const [contentAler, setContentAler] = useState("");

  const [openModelLogin, setOpenModelLogin] = useState(false);
  const toggleModelLogin = () => {
    if (!isLogin) setOpenModelLogin(!openModelLogin);
  };

  const [openModelImage, setOpenModelImage] = useState(false);
  const [imageInsideModel, setImageInsideModel] = useState("");

  const toggleModelImage = (i: any) => {
    setImageInsideModel(i);
    setOpenModelImage(!openModelImage);
    setContentAler("");
  };

  useEffect(() => {
    if (openModelLogin || openModelImage)
      document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModelLogin, openModelImage]);

  useEffect(() => {
    if (!!contentAler) {
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
        user,
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
