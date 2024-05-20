import icon from "@/assets/image/icon";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <div className="flex justify-center items-center w-[100%] h-[100%]">
        <Image
          width={32}
          height={32}
          priority
          className="animate-spin"
          src={icon.loading}
          alt=""
        />
      </div>
    </main>
  );
}
