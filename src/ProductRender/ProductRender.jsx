import React from "react";
import LikedProductHandler from "../LikedProductHandler/LikedProductHandler";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductRender = ({
  products,
  productHandler,
  showLikedProducts,
  showRatings,
  addTocart,
}) => {
  return (
    <>
      <div className="mx-2 mt-4 grid gap-6 pb-10 productContainer">
        {products.length === 0
          ? "Not available"
          : products.map((product, key) => {
              return (
                <div key={key}>
                  <div className="flex flex-col bg-white p-3 justify-evenly rounded-2xl product ">
                    {showLikedProducts && (
                      <LikedProductHandler
                        product={product}
                        productHandler={productHandler}
                      />
                    )}
                    <Link to={`${key}`}>
                      <div className="mb-4 imageContainer">
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
                        <div className={addTocart ? "flex" : "text-center"}>
                          <p className="text-xl font-semibold text-indigo-800">
                            <sup className="text-sm ">$</sup>
                            {product.newPrice}.00
                          </p>
                          {addTocart && (
                            <div className="flex items-center grow justify-end ">
                              <div className="rounded-full bg-blue-500 w-5 h-5 text-lg font-extrabold flex justify-center items-center text-white">
                                <BsPlus
                                  className="cursor-pointer"
                                  onClick={() => productHandler(product.id)}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        {showRatings && (
                          <div className="">
                            <div className="flex items-center justify-center">
                              <div className="flex  gap-1">
                                <span className="text-yellow-400 text-sm">
                                  {product.star}
                                </span>
                                <span className="text-yellow-400 text-sm">
                                  {product.star}
                                </span>
                                <span className="text-yellow-400 text-sm">
                                  {product.star}
                                </span>
                                <span className="text-yellow-400 text-sm">
                                  {product.star}
                                </span>
                                <span className="text-yellow-400 text-sm">
                                  {product.star}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default ProductRender;
