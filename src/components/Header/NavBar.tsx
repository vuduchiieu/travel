"use client";

import ModelUpdateUser from "@/app/[id]/ModelUpdateUser";
import { useAppContext } from "../Context/Context";
import ModelLogin from "../ModelLogin/ModelLogin";
import ModelNewPosts from "../ModelNewPosts/ModelNewPosts";
import ModelPost from "../ListPosts/ModelPost";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import icon from "@/assets/icon/icon";

interface NavItemProps {
  href: string;
  iconSrc: StaticImageData;
  alt: string;
  onClick?: () => void;
}

export default function NavBar() {
  const {
    openModelUpdateUser,
    openModelPosts,
    toggleModelNewPost,
    openModelNewPosts,
    openModelLogin,
    toggleModelLogin,
    user,
    isMobile,
  } = useAppContext();

  const pathname = usePathname();

  const { status } = useSession();

  const NavItem = ({ href, iconSrc, alt, onClick }: NavItemProps) => {
    if (status === "authenticated") {
      return (
        <Link
          href={href}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <Image
            width={26}
            height={26}
            className="w-[26px]"
            style={pathname === href ? { filter: "var(--filter-black)" } : {}}
            src={iconSrc}
            alt={alt}
          />
        </Link>
      );
    } else {
      return (
        <button
          onClick={onClick}
          className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
        >
          <Image
            width={26}
            height={26}
            className="w-[26px]"
            src={iconSrc}
            alt={alt}
          />
        </button>
      );
    }
  };

  return (
    <nav
      className="flex items-center justify-center max-w-[620px] h-[74px] px-[70px]"
      style={
        isMobile
          ? {
              position: "fixed",
              justifyContent: "space-between",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              width: "100vw",
              padding: 0,
            }
          : {}
      }
    >
      {openModelUpdateUser && <ModelUpdateUser />}
      {openModelLogin && <ModelLogin />}
      {openModelNewPosts && <ModelNewPosts />}
      {openModelPosts && <ModelPost />}
      <Link
        href={"/"}
        className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
      >
        <Image
          width={26}
          height={26}
          style={pathname === "/" ? { filter: "var(--filter-black)" } : {}}
          src={icon.home}
          alt=""
        />
      </Link>

      <NavItem
        href={"/search"}
        iconSrc={icon.search}
        alt={"Search"}
        onClick={() => toggleModelLogin(null)}
      />
      <button
        onClick={() =>
          status === "authenticated"
            ? toggleModelNewPost()
            : toggleModelLogin(null)
        }
        className="flex items-center justify-center w-[96px] h-[74px] rounded-[8px] hover:bg-[#0000000a]"
      >
        <Image
          width={26}
          height={26}
          className="w-[26px]"
          src={icon.posts}
          alt=""
        />
      </button>
      <NavItem
        href={"/activity"}
        iconSrc={icon.heartnav}
        alt={"Activity"}
        onClick={() => toggleModelLogin(null)}
      />

      <NavItem
        href={`/${user?.user.email}`}
        iconSrc={icon.user}
        alt={"Account"}
        onClick={() => toggleModelLogin(null)}
      />
    </nav>
  );
}
