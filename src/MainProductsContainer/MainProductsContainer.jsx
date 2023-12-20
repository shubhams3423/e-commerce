import React from "react";
import ProductTypeComponent from "../ProductTypeComponent/ProductTypeComponent";
import Products from "../Products/Products";

const MainProductContainer = () => {
  return (
    <div className="flex grow flex-col overflow-hidden px-2 pt-8 sm:px-10">
      <ProductTypeComponent />
      <div className="h-[calc(100%-8rem)] overflow-y-scroll">
        <Products />
      </div>
    </div>
  );
};

export default MainProductContainer;
