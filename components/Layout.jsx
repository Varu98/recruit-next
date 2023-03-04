import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div>
      <Sidebar
        toggleSidebar={toggleSidebar}
        handleSidebarToggle={handleSidebarToggle}
      />
      <Navbar toggleSidebar={toggleSidebar} />

      <main
        className={`max-sm:ml-[3rem] bg-gray-200 duration-300 h-screen p-8 ${
          toggleSidebar ? "ml-[12rem]" : "ml-[3rem]"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
