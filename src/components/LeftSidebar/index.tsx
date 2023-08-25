"use client";

import navList from "@/common/data/navList";
import RouterItem from "./RouterItem";
import Image from "next/image";
import avator from "@/assets/avator.jpeg";
import linkList from "./linkItems";
import LinkBtn from "./LinkBtn";
import { MdLightMode } from "react-icons/md";

const LeftSidebar = () => {
  return (
    <div className="w-96 h-screen sticky top-0 flex flex-col bg-deepBackWhite p-10">
      <Image
        src={avator}
        alt="avator"
        className="w-32 h-32 rounded-full my-5"
      />
      <p className="text-2xl text-deepTextGray font-bold">Kim DoKyun</p>
      <p className="text-lg text-lightTextGray mb-10">jasper200207</p>
      {navList.map((nav) => (
        <RouterItem nav={nav} key={nav.name} />
      ))}
      <div className="mt-auto mb-10 flex">
        <button className="text-sm text-lightTextGray rounded-full w-8 h-8 p-2 bg-white">
          <MdLightMode className="w-full h-full" />
        </button>
        <div className="mx-3 w-1 h-1 bg-deepTextGray rounded-full my-auto" />
        {linkList.map((link) => (
          <LinkBtn link={link} key={link.href} />
        ))}
      </div>
    </div>
  );
};
export default LeftSidebar;
