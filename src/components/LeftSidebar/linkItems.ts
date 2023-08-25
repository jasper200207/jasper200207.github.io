import { FaGithub } from "react-icons/fa";

export type LinkItem = {
  href: string;
  icon: any;
};

const linkList: LinkItem[] = [
  {
    href: "https://github.com/jasper200207",
    icon: FaGithub,
  },
];
export default linkList;
