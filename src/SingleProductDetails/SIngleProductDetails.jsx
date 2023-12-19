import React, { useState } from "react";
import FinalAmount from "../FinalAmount/FinalAmount";
import { AiFillStar } from "react-icons/ai";
import ProductsColors from "../ProductsColors/ProductsColors";
import ShoesSizes from "../ShoesSizes/ShoesSizes";

const SingleProductDetails = ({ product, productId }) => {
  return (
    <div className="mt-10 flex h-full flex-col justify-between rounded-t-3xl bg-gray-200">
      <div className="flex flex-col gap-5 p-5">
        <div>
          <div className="flex items-center justify-between ">
            <h2 className="text-2xl font-semibold text-indigo-600 opacity-70">
              {product.title}
            </h2>
            <p>
              <AiFillStar className="rating-star text-yellow-400" />
            </p>
          </div>
          <p className="text-sm tracking-wide text-blue-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400">Size:</p>
          <ShoesSizes availableProductSize={product.availableProductSize} />
        </div>
        <div className="flex items-center">
          <p className="text-gray-400">Available Color:</p>
          <div className="grow">
            <ProductsColors
              availableProductColors={product.availableProductColors}
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-16 rounded-t-3xl bg-white">
        <FinalAmount
          text="Add To Cart"
          backgroundColor="bg-gray-200"
          textColor="text-indigo-500"
          productAmount={product.newPrice}
          productId={productId}
        />
      </div>
    </div>
  );
};

export default SingleProductDetails;
