import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import TopMenu from "../TopMenu/TopMenu";
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";
const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 pt-8 pb-4 flex sm:px-10">
        <Sidebar />
        <div className="w-full px-3  h-screen overflow-y-scroll   sm:px-6 ">
          <TopMenu />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Main;
