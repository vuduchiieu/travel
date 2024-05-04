import { StaticImageData } from "next/image";

const Icon: {
  arrow_r: string | StaticImageData;
  logo: string | StaticImageData;
  home: string | StaticImageData;
  posts: string | StaticImageData;
  search: string | StaticImageData;
  user: string | StaticImageData;
  heart: string | StaticImageData;
} = {
  arrow_r: require("./arrow-right.svg"),
  logo: require("./logo.svg"),
  home: require("./home.svg"),
  posts: require("./posts.svg"),
  search: require("./search.svg"),
  user: require("./user.svg"),
  heart: require("./heart.svg"),
};

export default Icon;
