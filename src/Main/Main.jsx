import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import TopMenu from "../TopMenu/TopMenu";
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";
const Main = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <div className="px-4 pt-8 pb-4 flex sm:px-10">
        <Sidebar />
        <div className="w-full px-3 sm:px-6 ">
          <TopMenu />
          <div className="h-screen overflow-y-scroll pb-40">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
