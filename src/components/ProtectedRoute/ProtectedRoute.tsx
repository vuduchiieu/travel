"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import icon from "@/assets/image/icon";
import Image from "next/image";
import { useAppContext } from "../Context/Context";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { status, setOpenModelLogin } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") setOpenModelLogin(false);
    if (
      (status === "unauthenticated" && pathname === "/search") ||
      (status === "unauthenticated" && pathname === "/account")
    ) {
      router.push("/login");
    }
    if (status === "authenticated" && pathname === "/login") {
      router.push("/");
    }
  }, [status, pathname]);

  return status === "loading" ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image
        width={30}
        height={30}
        className="animate-spin w-[30px]"
        src={icon.loading}
        priority
        alt=""
      />
    </div>
  ) : (
    <>{children}</>
  );
};

export default ProtectedRoute;
