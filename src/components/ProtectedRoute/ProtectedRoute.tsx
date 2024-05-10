"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useSession } from "next-auth/react";
import icon from "@/assets/icon/icon";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const { status } = useSession();

  useEffect(() => {
    if (
      (status === "unauthenticated" && pathname === "/search") ||
      (status === "loading" && pathname === "/search") ||
      (status === "unauthenticated" && pathname === "/account") ||
      (status === "loading" && pathname === "/account")
    ) {
      router.push("/login");
    }
    if (
      (status === "authenticated" && pathname === "/login") ||
      (status === "loading" && pathname === "/login")
    ) {
      router.push("/");
    }
  }, [status, router]);

  return status === "loading" ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <img className="animate-spin w-[30px]" src={icon.loading} alt="" />
    </div>
  ) : (
    <>{children}</>
  );
};

export default ProtectedRoute;
