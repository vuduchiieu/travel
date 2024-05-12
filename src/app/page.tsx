import icon from "@/assets/icon/icon";
import NavContent from "@/app/Components/NavContent";
import ImagePost from "@/app/Components/ImagePost";
import NewPosts from "@/app/Components/NewPosts";
import { MainLayout } from "@/layout";
import Image from "next/image";
import Posts from "./Components/[post]";

export default function Home() {
  return (
    <MainLayout>
      <NewPosts />
      <Posts />
    </MainLayout>
  );
}
