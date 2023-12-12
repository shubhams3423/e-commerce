import React, { useContext } from "react";
import ProductContext from "../productContext/ProductContext";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TiHeartFullOutline } from "react-icons/ti";
import { BsPlus } from "react-icons/bs";
import "./LikedProduct.css";
const LikedProduct = () => {
  const { products, setProducts, likedProducts } = useContext(ProductContext);
  return (
    <div className="h-screen">
      <div className="pt-5 px-6 bg-gray-300 overflow-hidden h-full">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <FaArrowLeft />
            </Link>
          </div>
          <div>
            <Link to="/">
              <div>
                <span className="text-blue-800 text-2xl">X</span>
                <span className="text-emerald-300 text-sm">E</span>
              </div>
            </Link>
          </div>
          <div className="bg-red-500 rounded-full w-6 h-6 flex justify-center items-center">
            <TiHeartFullOutline className="text-white" />
          </div>
        </div>
        <div className="h-full overflow-scroll">
          <div className=" mx-2 mt-4 grid gap-9 pb-10 productContainer productContainer">
            {likedProducts.map((product) => {
              return (
                <div className="bg-white p-3 rounded-2xl ">
                  <Link to="/id">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-4 ">
                          <img
                            src={product.img}
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <h1 className="text-sm text-blue-800 font-medium truncate mb-1">
                            {product.title}
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xl font-semibold text-indigo-800">
                          <sup className="text-sm ">$</sup>
                          {product.newPrice}.00
                        </p>
                        <div className="rounded-full bg-blue-500 w-5 h-5 text-lg font-extrabold flex justify-center items-center text-white">
                          <BsPlus />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedProduct;
