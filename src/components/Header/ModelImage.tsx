"use client";
import Image from "next/image";
import { useAppContext } from "../Context/Context";
import icon from "@/assets/icon/icon";

export default function ModelImage() {
  const { imageInsideModel, openModelImage, setOpenModelImage } =
    useAppContext();

  const handleCloseModelLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModelImage(!openModelImage);
    }
  };

  return (
    <div
      onClick={handleCloseModelLogin}
      className="flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-[#000]"
    >
      <button
        onClick={() => setOpenModelImage(!openModelImage)}
        className="absolute top-[2%] left-[2%] flex items-center justify-center h-[44px] w-[44px] rounded-[50%] bg-[#1e1e1e]  hover:scale-[1.07]"
      >
        <Image
          width={18}
          height={18}
          style={{ filter: "var(--filter-grey)" }}
          src={icon.close}
          alt=""
        />
      </button>
      <Image
        width={1440}
        height={1920}
        className="h-[100%] w-auto"
        src={imageInsideModel || icon.defaultImage}
        alt=""
      />
    </div>
  );
}
