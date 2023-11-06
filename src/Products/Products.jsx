import React, { useContext } from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Products.css";
import ProductContext from "../productContext/ProductContext";
import { toast, ToastContainer } from "react-toastify";
const Products = () => {
  const { products, cartProduct, setCartProduct, productIds, setProductIds } =
    useContext(ProductContext);
  let { totalAmt, setTotalAmt, discountedAmt, setDiscountedAmt } =
    useContext(ProductContext);

  const handlerAddProductToCart = (id) => {
    setCartProduct([
      ...cartProduct,
      products.filter((product, key) => {
        if (product.id === id && !productIds.includes(product.id)) {
          setProductIds([...productIds, product.id]);
          setDiscountedAmt(
            (discountedAmt += +product.prevPrice - +product.newPrice)
          );
          setTotalAmt((totalAmt += +product.newPrice));
          return true;
        }
        return false;
      }),
    ]);
    toast.success("Product added to cart");
  };
  return (
    <div className="mx-2 mt-4 grid gap-8 productContainer pb-3">
      {products.length === 0
        ? "Not available"
        : products.map((product, key) => {
            return (
              <div className="flex flex-col product p-3 justify-evenly rounded-lg">
                <div className="mb-4">
                  <img src={product.img} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h1 className="text-lg font-medium">{product.title}</h1>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <div className="flex text-yellow-500">
                        <span>{product.star}</span>
                        <span>{product.star}</span>
                        <span>{product.star}</span>
                        <span>{product.star}</span>
                        <span>{product.star}</span>
                      </div>
                      <p className="">{product.reviews}</p>
                    </div>
                    <div>
                      <p className="">{product.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="mr-3 line-through">{product.prevPrice}$</p>
                      <p>{product.newPrice}$</p>
                    </div>
                    <BsFillBagHeartFill
                      className="text-black-400 cursor-pointer text-gray-600"
                      onClick={() => handlerAddProductToCart(product.id)}
                    />
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
