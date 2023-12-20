import React from "react";
import LikedProductHandler from "../LikedProductHandler/LikedProductHandler";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductsRender = ({
  products,
  productHandlerFunction,
  showLikedProducts,
  showRatings,
  addTocart,
  isLikedProduct,
}) => {
  return (
    <>
      <div className="productContainer mx-2 mt-4 grid gap-6 pb-10">
        {products.map((product, key) => {
          return (
            <div key={key}>
              <div className="flex min-h-[240px] w-40 flex-col justify-evenly rounded-2xl bg-white p-3 transition-all duration-[400ms] ease-in-out hover:w-[165px] hover:bg-[#B2B2B2]">
                {showLikedProducts && (
                  <LikedProductHandler
                    product={product}
                    productHandlerFunction={productHandlerFunction}
                  />
                )}
                <Link
                  to={`${
                    isLikedProduct ? `/likedProducts/${product.id}` : product.id
                  }  `}
                >
                  <div className="mb-4 h-24 w-[136px] overflow-hidden">
                    <img
                      src={product.img}
                      alt=""
                      className="h-full w-full object-fill"
                    />
                  </div>
                  <div>
                    <h1
                      className="mb-1 truncate text-sm font-medium text-blue-800"
                      title={product.title}
                    >
                      {product.title}
                    </h1>
                  </div>
                </Link>
                <div className="flex flex-col gap-y-1">
                  <div className={addTocart ? "flex" : "text-center"}>
                    <p className="text-xl font-semibold text-indigo-800">
                      <sup className="text-sm ">$</sup>
                      {product.newPrice}.00
                    </p>
                    {addTocart && (
                      <div className="flex grow items-center justify-end ">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-lg font-extrabold text-white">
                          <BsPlus
                            className="cursor-pointer"
                            onClick={() => productHandlerFunction(product.id)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {showRatings && (
                    <div className="">
                      <div className="flex items-center justify-center">
                        <div className="flex  gap-1">
                          <span className="text-sm text-yellow-400">
                            {product.star}
                          </span>
                          <span className="text-sm text-yellow-400">
                            {product.star}
                          </span>
                          <span className="text-sm text-yellow-400">
                            {product.star}
                          </span>
                          <span className="text-sm text-yellow-400">
                            {product.star}
                          </span>
                          <span className="text-sm text-yellow-400">
                            {product.star}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsRender;
