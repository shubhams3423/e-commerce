import React, { useContext } from "react";
import ProductContext from "../productContext/ProductContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { productObj } from "../ShoesObjects";
import SearchProductComponent from "../SearchProduct/SearchProductComponent";
const Navbar = () => {
  const { setProducts } = useContext(ProductContext);
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
              <span className="text-blue-800 text-2xl font-medium">X</span>
              <span className="text-emerald-300 text-sm font-medium">E</span>
            </div>
          </div>
        </div>
        <div className="flex grow justify-end gap-x-2 ">
          <div className="flex items-center">
            <SearchProductComponent
              inputFunction={handlerSearchProduct}
              width="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
