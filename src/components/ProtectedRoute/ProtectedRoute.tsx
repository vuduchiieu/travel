"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useAppContext } from "../Context/Context";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLogin } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (
      (!isLogin && pathname === "/search") ||
      (!isLogin && pathname === "/account")
    ) {
      router.push("/login");
    } else if (isLogin && pathname === "/login") {
      router.push("/");
    }
  }, [isLogin, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
