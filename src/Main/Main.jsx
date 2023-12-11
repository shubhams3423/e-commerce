import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col overflow-hidden main justify-between">
        <Navbar />
        <div className="px-2 pt-8 flex-col  grow overflow-hidden flex sm:px-10">
          <TopMenu />
          <div className="overflow-y-scroll">
            <Products />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
