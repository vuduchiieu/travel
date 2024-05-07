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
  contentAler: any;
  setContentAler: any;
  imageInsideModel: string;
  openModelImage: boolean;
  setOpenModelImage: (newState: boolean) => void;
  toggleModelImage: (imageUrl: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: user, status } = useSession();

  console.log(user);
  console.log(status);

  const [contentAler, setContentAler] = useState("");

  const [openModelLogin, setOpenModelLogin] = useState(false);
  const toggleModelLogin = () => {
    setOpenModelLogin(!openModelLogin);
  };

  const [openModelImage, setOpenModelImage] = useState(false);
  const [imageInsideModel, setImageInsideModel] = useState("");

  const toggleModelImage = (i: any) => {
    setImageInsideModel(i);
    setOpenModelImage(!openModelImage);
  };

  useEffect(() => {
    if (openModelLogin || openModelImage)
      document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModelLogin, openModelImage]);

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
