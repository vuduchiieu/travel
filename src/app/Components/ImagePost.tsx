"use client";
import Image from "next/image";
import { useAppContext } from "../../components/Context/Context";
import icon from "@/assets/icon/icon";

interface ImagePostProps {
  src?: any;
}

export default function ImagePost({ src }: ImagePostProps) {
  const { toggleModelImage } = useAppContext();
  return (
    src[0] && (
      <Image
        width={0}
        height={0}
        priority
        onClick={() => toggleModelImage(src[0].url)}
        className="h-[430px] w-auto object-cover rounded-[8px] mt-[8px] cursor-pointer "
        src={src[0].url || icon.defaultImage}
        alt=""
      />
    )
  );
}
