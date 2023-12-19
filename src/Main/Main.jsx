import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainProductContainer from "../MainProductsContainer/MainProductsContainer";
const Main = () => {
  return (
    <div className="h-screen">
      <div className="flex h-full flex-col justify-between overflow-hidden bg-gray-100">
        <Navbar />
        <MainProductContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
