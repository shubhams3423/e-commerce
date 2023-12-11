import React, { useContext } from "react";
import ProductContext from "../productContext/ProductContext";
import { productObj } from "../file";
import { MdKeyboardArrowDown } from "react-icons/md";
const TopMenu = () => {
  const { setProducts, companyProductList } = useContext(ProductContext);

  const handlerBrandProducts = (e) => {
    // setProducts(
    //   companyProductList.length === 0
    //     ? productObj.filter(
    //         (product, key) =>
    //           product.company.toLowerCase() ===
    //           (e.target.value === "All"
    //             ? product.company.toLowerCase()
    //             : e.target.value.toLowerCase())
    //       )
    //     : companyProductList.filter(
    //         (product, key) =>
    //           product.company.toLowerCase() ===
    //           (e.target.value === "All"
    //             ? product.company.toLowerCase()
    //             : e.target.value.toLowerCase())
    //       )
    // );
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="pl-2  text-xl font-bold">Our Products</h1>
          <div className="flex items-center">
            <p className="text-sm text-gray-600 me-1">Sort by</p>
            <MdKeyboardArrowDown className="me-2 text-lg text-gray-600" />
          </div>
        </div>
        <div className="flex gap-x-4 pl-2  ">
          <button
            className="rounded-xl bg-white px-3 py-2 text-sm flex items-center"
            value="Sneakers"
            onClick={handlerBrandProducts}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6c3Q46vk7w2G4_fYcT_U_zmNoYMMb-meR5g&usqp=CAU"
              alt=""
              className="me-1 h-6 w-6"
            />
            <span className="font-medium">Sneakers</span>
          </button>
          <button
            className="rounded-xl bg-white px-3 py-1 text-sm flex items-center"
            value="Watch"
            onClick={handlerBrandProducts}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNaoYPsICJOR7dO-f0q9iSfAWaF2c88OhvQ&usqp=CAU"
              alt=""
              className="me-1 h-6 w-6"
            />
            <span className="font-medium">Watch</span>
          </button>
          <button
            className="rounded-xl  bg-white px-3 py-1 text-sm flex items-center"
            value="BagPack"
            onClick={handlerBrandProducts}
          >
            <img
              src="https://www.fgear.in/cdn/shop/files/Untitled-1_2_copy_081f1e36-f118-4f1d-9063-985b9db4d291.jpg?v=1689761283"
              alt=""
              className="me-1 h-6 w-6"
            />
            <span className="font-medium">BagPack</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
