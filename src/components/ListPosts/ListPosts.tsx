import { useAppContext } from "../Context/Context";
import PostItem from "./PostItems";

export default function ListPosts({ posts }: any) {
  const { isMobile } = useAppContext();

  return posts.map((item: any) => (
    <PostItem key={item._id} item={item} isMobile={isMobile} />
  ));
}
