"use client";
import { useAppContext } from "../Context/Context";
interface ImagePostProps {
  src: string;
}

export default function ImagePost({ src }: ImagePostProps) {
  const { toggleModelImage } = useAppContext();
  return (
    <img
      onClick={() => toggleModelImage(src)}
      className="max-w-[368px] max-h-[430px] object-cover rounded-[8px] mt-[8px] cursor-pointer "
      src={src}
      alt=""
    />
  );
}
