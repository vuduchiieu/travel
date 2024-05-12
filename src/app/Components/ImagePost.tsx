"use client";
import Image from "next/image";
import { useAppContext } from "../../components/Context/Context";
interface ImagePostProps {
  src: string;
}

export default function ImagePost({ src }: ImagePostProps) {
  const { toggleModelImage } = useAppContext();
  return (
    <Image
      width={1440}
      height={1920}
      onClick={() => toggleModelImage(src)}
      className="h-[430px] w-auto object-cover rounded-[8px] mt-[8px] cursor-pointer "
      src={src}
      alt=""
    />
  );
}
