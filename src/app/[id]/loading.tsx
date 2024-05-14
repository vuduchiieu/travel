import icon from "@/assets/icon/icon";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Image
        width={32}
        height={32}
        priority
        className="animate-spin"
        src={icon.loading}
        alt=""
      />
    </div>
  );
}
