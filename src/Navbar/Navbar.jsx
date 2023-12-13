import React, { useContext, useState } from "react";
import ProductContext from "../productContext/ProductContext";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { productObj } from "../file";
const Navbar = () => {
  const { setProducts, companyProductList } = useContext(ProductContext);
  const handlerSearchProduct = (e) => {
    setProducts(
      productObj.filter((product, key) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <div className="px-4 py-1 h-16 flex items-center">
        <div className="flex">
          <div className="w-10 h-10 flex items-center  ">
            <HiMenuAlt3 className="text-2xl" />
          </div>
          <div className="w-10 h-10 flex items-center ">
            <div>
              <span className="text-blue-800 text-2xl">X</span>
              <span className="text-emerald-300 text-sm">E</span>
            </div>
          </div>
        </div>
        <div className="flex grow justify-end gap-x-2 ">
          <div className="flex items-center">
            <input
              type="text"
              className="w-34 rounded-lg py-0.5 px-2 mr-2 border-solid border-2 border-black"
              placeholder="Search..."
              onChange={handlerSearchProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
