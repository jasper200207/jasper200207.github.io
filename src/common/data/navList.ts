import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";

export type NavItem = {
  name: string;
  path: string;
  Icon: any;
};

const navList: NavItem[] = [
  {
    name: "HOME",
    path: "/",
    Icon: AiFillHome,
  },
  {
    name: "CATEGORIES",
    path: "/categories/",
    Icon: CgMenuLeft,
  },
  {
    name: "ABOUT",
    path: "/about/",
    Icon: AiFillInfoCircle,
  },
];
export default navList;
