import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";

const LikedProductHandler = ({ product, productHandler }) => {
  return (
    <div className="flex items-center justify-end mb-3 max-h-2.5">
      <div
        className={`${
          product.likedProduct === true &&
          "bg-red-500 rounded-full w-5 h-5 mt flex justify-center items-center "
        }`}
      >
        <TiHeartFullOutline
          className={`text-black-400 text-lg cursor-pointer likedProduct ${
            product.likedProduct === true
              ? "text-white text-sm"
              : "text-gray-300"
          }`}
          onClick={() => productHandler(product.id)}
        />
      </div>
    </div>
  );
};

export default LikedProductHandler;
