import React, { useState } from "react";
import FinalAmountComponent from "../FinalAmountComponent/FinalAmountComponent";
import { AiFillStar } from "react-icons/ai";

const SingleProductDetails = ({ product, productId }) => {
  const [active, setActive] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });
  return (
    <div className="bg-gray-200 h-full rounded-t-3xl mt-10 flex flex-col justify-between">
      <div className="p-5 flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between ">
            <h2 className="text-2xl text-indigo-600 font-semibold opacity-70">
              {product.title}
            </h2>
            <p>
              <AiFillStar className="rating-star text-yellow-400" />
            </p>
          </div>
          <p className="text-blue-900 text-sm tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400">Size:</p>
          <div className="flex items-center grow justify-evenly">
            <div
              className={`${
                active[1].valueOf(0) && "bg-blue-400"
              } rounded py-1 px-2`}
              onClick={() =>
                setActive({ 1: true, 2: false, 4: false, 3: false })
              }
            >
              <p className=" font-semibold">US 6</p>
            </div>
            <div
              className={`${
                active[2].valueOf(0) && "bg-blue-400"
              } rounded py-1 px-2`}
              onClick={() =>
                setActive({ 1: false, 2: true, 4: false, 3: false })
              }
            >
              <p className="font-semibold">US 7</p>
            </div>
            <div
              className={`${
                active[3].valueOf(0) && "bg-blue-400"
              } rounded py-1 px-2`}
              onClick={() =>
                setActive({ 1: false, 2: false, 4: false, 3: true })
              }
            >
              <p className="font-semibold">US 8</p>
            </div>
            <div
              className={`${
                active[4].valueOf(0) && "bg-blue-400"
              } rounded py-1 px-2`}
              onClick={() =>
                setActive({ 1: false, 2: false, 4: true, 3: false })
              }
            >
              <p className="font-semibold">US 9</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400">Available Color:</p>
          <div className=" grow flex justify-evenly items-center">
            <div className="border-2 w-6 h-6 flex justify-center items-center rounded-full   border-solid border-yellow-200">
              <p className="bg-yellow-500 w-4 h-4 rounded-full "></p>
            </div>
            <div className="border-2 w-6 h-6 flex justify-center items-center rounded-full   border-solid border-red-200">
              <p className="bg-red-500 w-4 h-4 rounded-full "></p>
            </div>
            <div className="border-2 w-6 h-6 flex justify-center items-center rounded-full   border-solid border-blue-200">
              <p className="bg-blue-500 w-4 h-4 rounded-full "></p>
            </div>
            <div className="border-2 w-6 h-6 flex justify-center items-center rounded-full   border-solid border-pink-200">
              <p className="bg-pink-500 w-4 h-4 rounded-full "></p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0 bg-white h-16 rounded-t-3xl">
        <FinalAmountComponent
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
