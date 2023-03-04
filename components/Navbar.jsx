import Image from "next/image";
import React from "react";
import { MdOutlineNotificationsNone, MdSearch } from "react-icons/md";
const Navbar = ({ toggleSidebar }) => {
  return (
    <div
      className={` max-sm:ml-[3rem] duration-300 h-16 px-4 flex justify-between items-center ${
        toggleSidebar ? "ml-[12rem]" : "ml-[3rem]"
      }`}
    >
      <div className="px-4 flex justify-center items-center text-gray-600 cursor-pointer">
        <MdSearch className="text-3xl mr-2"/>
        <p>Search</p>
      </div>
      <div className="flex justify-around items-center space-x-4">
        <span className="relative">
          <MdOutlineNotificationsNone className="text-3xl text-gray-600" />
          <div className="w-2.5 h-2.5 border-2 border-white bg-green-500 rounded-full absolute top-0 right-0.5"></div>
        </span>
        <p className="font-semibold text-gray-600">Alice Cooper</p>
        <span>
          <Image src={"/Rectangle.png"} height={50} width={50} alt="user-img" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
