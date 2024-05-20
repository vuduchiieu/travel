import { StaticImageData } from "next/image";
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
import iconDelete from "./delete.svg";
import background from "./background.png";
import send from "./send.svg";
import heartnav from "./heartnav.svg";
import arrowright from "./arrowright.svg";
import arrowleft from "./arrowleft.svg";
import notfound from "./notfound.gif";

interface iconType {
  arrow_r: StaticImageData;
  logo: StaticImageData;
  home: StaticImageData;
  posts: StaticImageData;
  search: StaticImageData;
  user: StaticImageData;
  heart: StaticImageData;
  heartnav: StaticImageData;
  more: StaticImageData;
  comment: StaticImageData;
  repost: StaticImageData;
  share: StaticImageData;
  google: StaticImageData;
  close: StaticImageData;
  menu: StaticImageData;
  defaultImage: StaticImageData;
  loading: StaticImageData;
  photo: StaticImageData;
  lock: StaticImageData;
  background: StaticImageData;
  iconDelete: StaticImageData;
  send: StaticImageData;
  arrowright: StaticImageData;
  arrowleft: StaticImageData;
  notfound: StaticImageData;
}

const icon: iconType = {
  arrow_r,
  logo,
  home,
  posts,
  search,
  user,
  heart,
  heartnav,
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
  background,
  iconDelete,
  send,
  arrowright,
  arrowleft,
  notfound,
};

export default icon;
