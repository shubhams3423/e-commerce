import React from "react";
import "./Main.css";
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductTypeComponent from "../ProductTypeComponent/ProductTypeComponent";
const Main = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col overflow-hidden main justify-between">
        <Navbar />
        <div className="px-2 pt-8 flex-col  grow overflow-hidden flex sm:px-10">
          <ProductTypeComponent />
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
