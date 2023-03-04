import React from "react";
import { AiOutlineMenuFold, AiOutlineRocket } from "react-icons/ai";
import {
  MdOutlineDashboard,
  MdPeopleOutline,
  MdSearch,
  MdPersonSearch,
  MdOutlineCalendarMonth,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";

const sidebarMenu = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Candidates",
    icon: <MdPersonSearch />,
  },
  {
    title: "Jobs",
    icon: <MdSearch />,
  },
  {
    title: "Team",
    icon: <MdPeopleOutline />,
  },
  {
    title: "Calendar",
    icon: <MdOutlineCalendarMonth />,
  },
  {
    title: "Settings",
    icon: <MdOutlineSettings />,
  },
];

const Sidebar = ({ toggleSidebar, handleSidebarToggle }) => {
  return (
    <div
      className={`max-sm:w-[3rem] bg-dark duration-300 h-screen fixed ${
        toggleSidebar ? "w-[12rem]" : "w-[3rem]"
      }`}
    >
      <div className="hidden lg:block relative">
        <AiOutlineMenuFold
          onClick={handleSidebarToggle}
          className={`absolute text-4xl top-2 -right-4 text-white border border-dark bg-dark ${
            toggleSidebar ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <div className="text-gray-100 flex justify-center items-center mt-12">
        <AiOutlineRocket className="text-3xl text-primary mr-2" />
        <p
          className={`text-xl font-bold ${!toggleSidebar ? "hidden" : "block"}`}
        >
          RecruitNxt
        </p>
      </div>
      <ul className="text-gray-100 px-4 flex flex-col mt-8 gap-8 items-start">
        {sidebarMenu.map((item, key) => (
          <li
            className={`flex items-center w-full ${
              !toggleSidebar ? "p-0" : "p-2"
            } rounded-md text-lg hover:text-dark hover:bg-primary hover:cursor-pointer`}
            key={key}
          >
            <span className="mr-4 ">{item.icon}</span>
            <p className={`${!toggleSidebar ? "hidden" : "block"}`}>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
      <button
        className={`flex items-center w-full px-8 py-2 mt-80 rounded-md text-lg  hover:text-primary hover:cursor-pointer text-gray-100 ">
        <MdLogout className="text-xl mr-2 ${
          !toggleSidebar ? "hidden" : "block"
        }`}
      >
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
