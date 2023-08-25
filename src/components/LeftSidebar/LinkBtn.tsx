import Link from "next/link";
import { LinkItem } from "./linkItems";

type Props = {
  link: LinkItem;
};

const LinkBtn = ({ link }: Props) => {
  return (
    <Link href={link.href} passHref legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-lightTextGray rounded-full w-8 h-8 p-2 bg-white"
      >
        <link.icon className="w-full h-full" />
      </a>
    </Link>
  );
};

export default LinkBtn;
