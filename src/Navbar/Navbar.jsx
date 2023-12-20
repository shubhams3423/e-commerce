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
        product.title.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };
  return (
    <div>
      <div className="flex h-16 items-center px-4 py-1">
        <div className="flex">
          <div className="flex h-10 w-10 items-center  ">
            <HiMenuAlt3 className="cursor-pointer text-2xl" />
          </div>
          <div className="flex h-10 w-10 items-center ">
            <div>
              <span className="text-2xl font-medium text-blue-800">X</span>
              <span className="text-sm font-medium text-emerald-300">E</span>
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
