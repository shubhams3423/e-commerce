import React, { useContext } from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import "./Products.css";
import ProductContext from "../productContext/ProductContext";
import { ToastContainer } from "react-toastify";
const Products = () => {
  const {
    products,
    cartProduct,
    setCartProduct,
    productIds,
    setProductIds,
    SetProductCount,
    productCount,
    totalAmt,
    setTotalAmt,
  } = useContext(ProductContext);
  let { discountedAmt, setDiscountedAmt } = useContext(ProductContext);
  const handlerAddProductToCart = (id) => {
    setCartProduct([
      ...cartProduct,
      products.filter((product, key) => {
        if (product.id === id && !productIds.includes(product.id)) {
          setProductIds([...productIds, product.id]);
          SetProductCount(productCount + 1);
          setDiscountedAmt(
            (discountedAmt += +product.prevPrice - +product.newPrice) //plus sign converts string into number
          );
          setTotalAmt(totalAmt + Number(product.newPrice));
          return true;
        }
        return false;
      }),
    ]);
  };
  return (
    <div className="mx-2 mt-4 grid gap-9 pb-10 productContainer">
      {products.length === 0
        ? "Not available"
        : products.map((product, key) => {
            return (
              <div className="flex flex-col bg-white p-3 justify-evenly rounded-2xl ">
                <div className="flex items-center justify-end mb-3">
                  <TiHeartFullOutline
                    className="text-black-400 cursor-pointer text-gray-300"
                    onClick={() => handlerAddProductToCart(product.id)}
                  />
                </div>
                <div className="mb-4">
                  <img src={product.img} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h1 className="text-sm text-blue-800 font-medium">
                    {product.title}
                  </h1>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-indigo-800">
                      <sup>$</sup>
                      {product.newPrice}.00
                    </p>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-center">
                      <div className="flex  gap-1">
                        <span className="text-yellow-400 text-sm">
                          {product.star}
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
                </div>
              </div>
            );
          })}
      <ToastContainer />
    </div>
  );
};

export default Products;
