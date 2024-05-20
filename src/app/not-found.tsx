"use client";
import icon from "@/assets/image/icon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [timeOut, setTimeOut] = useState(8);
  const router = useRouter();
  useEffect(() => {
    if (timeOut === 0) return router.push("/");
    const times = setInterval(() => {
      setTimeOut((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(times);
  }, [timeOut]);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <Image priority src={icon.notfound} alt="" />
      <div className="absolute bottom-[25%] text-center max-[50%]">
        Bạn đang đi lạc? quay về{" "}
        <Link href="/" className="text-[#0ea5e9]">
          trang chủ
        </Link>{" "}
        sau {timeOut}s
      </div>
    </div>
  );
}
