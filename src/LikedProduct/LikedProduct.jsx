import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../productContext/ProductContext";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TiHeartFullOutline } from "react-icons/ti";
import { BsPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import "./LikedProduct.css";
const LikedProduct = () => {
  const { likedProducts, cartProducts, setCartProducts, SetProductCount } =
    useContext(ProductContext);
  let { totalCartAmt, setTotalCartAmt } = useContext(ProductContext);
  const [selectedProducts, setSelectedProduct] = useState(likedProducts);
  const handlerAddProductToCart = (id) => {
    setCartProducts([
      ...cartProducts,
      likedProducts.find((obj) => obj.id === id),
    ]);
    setTotalCartAmt(
      (totalCartAmt += +likedProducts.find((product) => product.id === id)
        .newPrice)
    );
  };
  SetProductCount(cartProducts.length);
  const handlerInputProudct = (e) => {
    setSelectedProduct(
      likedProducts.filter((product, key) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="px-2 overflow-hidden h-full">
        <div className="flex justify-between items-center mt-5 mx-4">
          <div>
            <Link to="/">
              <FaArrowLeft />
            </Link>
          </div>
          <div>
            <Link to="/">
              <div>
                <h2 className="font-bold">For You</h2>
              </div>
            </Link>
          </div>
          <div className="bg-red-500 rounded-full w-6 h-6 flex justify-center items-center">
            <TiHeartFullOutline className="text-white" />
          </div>
        </div>
        <div className="flex items-center mt-4 mx-4">
          <IoSearch className="absolute left-8 top-20 text-xl" />
          <input
            type="text"
            id=""
            placeholder="Search Your Item"
            className="px-2 py-2 rounded-xl w-full mt-3 pl-9 text-sm font-normal outline-none"
            onChange={handlerInputProudct}
          />
        </div>
        <div className="h-full overflow-scroll">
          <div className=" mx-2 mt-4 grid gap-9 mb-10 productContainer">
            {selectedProducts.length === 0 || likedProducts.length === 0
              ? "None"
              : selectedProducts.map((product) => {
                  return (
                    <div className="bg-white p-3 rounded-2xl cursor-pointer likedProducts">
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
                            <h1
                              className="text-sm text-blue-800 font-medium truncate mb-1"
                              title={product.title}
                            >
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
                            <BsPlus
                              className="cursor-pointer"
                              onClick={() =>
                                handlerAddProductToCart(product.id)
                              }
                            />
                          </div>
                        </div>
                      </div>
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
