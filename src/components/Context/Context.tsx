"use client";
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
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [openModelLogin, setOpenModelLogin] = useState(false);
  const toggleModelLogin = () => {
    setOpenModelLogin(!openModelLogin);
  };

  useEffect(() => {
    if (openModelLogin) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModelLogin]);

  return (
    <UserContext.Provider
      value={{ openModelLogin, setOpenModelLogin, toggleModelLogin }}
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