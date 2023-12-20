import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const ProductTypeComponent = () => {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="pl-2  text-xl font-bold">Our Products</h1>
          <div className="flex items-center">
            <p className="me-1 text-sm text-gray-600">Sort by</p>
            <MdKeyboardArrowDown className="me-2 text-lg text-gray-600" />
          </div>
        </div>
        <div className="flex gap-x-4 pl-2">
          <button
            className="flex items-center rounded-xl bg-white px-3 py-2 text-sm"
            value="Sneakers"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6c3Q46vk7w2G4_fYcT_U_zmNoYMMb-meR5g&usqp=CAU"
              alt=""
              className="me-1 h-6 w-6"
            />
            <span className="font-medium">Sneakers</span>
          </button>
          <button
            className="flex items-center rounded-xl bg-white px-3 py-1 text-sm"
            value="Watch"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNaoYPsICJOR7dO-f0q9iSfAWaF2c88OhvQ&usqp=CAU"
              alt=""
              className="me-1 h-6 w-6"
            />
            <span className="font-medium">Watch</span>
          </button>
          <button
            className="flex  items-center rounded-xl bg-white px-3 py-1 text-sm"
            value="BagPack"
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

export default ProductTypeComponent;
