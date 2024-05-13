import { MainLayout } from "@/layout/MainLayout";
import NewPosts from "@/app/Components/NewPosts";
import Posts from "./Components/post";

export default function Home() {
  return (
    <MainLayout>
      <NewPosts />
      <Posts />
    </MainLayout>
  );
}
