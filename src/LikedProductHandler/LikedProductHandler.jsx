import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";

const LikedProductHandler = ({ product, productHandlerFunction }) => {
  return (
    <div className="mb-3 flex max-h-2.5 items-center justify-end">
      <div
        className={`${
          product.likedProduct === true &&
          "mt flex h-5 w-5 items-center justify-center rounded-full bg-red-500"
        }`}
      >
        <TiHeartFullOutline
          className={`text-black-400  mt-[1px] cursor-pointer text-lg ${
            product.likedProduct === true
              ? "text-sm text-white"
              : "text-gray-300"
          }`}
          onClick={() => productHandlerFunction(product.id)}
        />
      </div>
    </div>
  );
};

export default LikedProductHandler;
