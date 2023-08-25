import { NavItem } from "@/common/data/navList";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  nav: NavItem;
};

const RouterItem = ({ nav }: Props) => {
  const pathname = usePathname();

  if (pathname === nav.path) {
    return (
      <Link
        href={nav.path}
        className="flex flex-row w-full h-12 my-3 px-3 rounded-xl bg-pointBackWhite text-deepTextGray"
      >
        <nav.Icon className="w-8 h-8 my-auto" />
        <p className="text-lg my-auto ml-5">{nav.name}</p>
      </Link>
    );
  } else {
    return (
      <Link
        href={nav.path}
        className="flex flex-row w-full h-12 my-3 px-3 rounded-xl text-lightTextGray"
      >
        <nav.Icon className="w-8 h-8 my-auto" />
        <p className="text-lg my-auto ml-5">{nav.name}</p>
      </Link>
    );
  }
};

export default RouterItem;
