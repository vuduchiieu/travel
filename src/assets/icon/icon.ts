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
  instagram: string;
}

const icon: iconType = {
  arrow_r: require("./arrow-right.svg").default.src,
  logo: require("./logo.svg").default.src,
  home: require("./home.svg").default.src,
  posts: require("./posts.svg").default.src,
  search: require("./search.svg").default.src,
  user: require("./user.svg").default.src,
  heart: require("./heart.svg").default.src,
  more: require("./more.svg").default.src,
  comment: require("./comment.svg").default.src,
  repost: require("./repost.svg").default.src,
  share: require("./share.svg").default.src,
  instagram: require("./instagram.svg").default.src,
};

export default icon;
