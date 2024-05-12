import arrow_r from "./arrow-right.svg";
import logo from "./logo.svg";
import home from "./home.svg";
import posts from "./posts.svg";
import search from "./search.svg";
import user from "./user.svg";
import heart from "./heart.svg";
import more from "./more.svg";
import comment from "./comment.svg";
import repost from "./repost.svg";
import share from "./share.svg";
import google from "./google.svg";
import close from "./close.svg";
import menu from "./menu.svg";
import defaultImage from "./defaultImage.svg";
import loading from "./loading.svg";
import photo from "./photo.svg";
import lock from "./lock.svg";

interface iconType {
  arrow_r: string;
  logo: string;
  home: string;
  posts: string;
  search: string;
  user: string;
  heart: string;
  more: string;
  comment: string;
  repost: string;
  share: string;
  google: string;
  close: string;
  menu: string;
  defaultImage: string;
  loading: string;
  photo: string;
  lock: string;
}

const icon: iconType = {
  arrow_r,
  logo,
  home,
  posts,
  search,
  user,
  heart,
  more,
  comment,
  repost,
  share,
  google,
  close,
  menu,
  defaultImage,
  loading,
  photo,
  lock,
};

export default icon;
