import React, { useContext } from "react";
import "./Cart.css";
import ProductContext from "../productContext/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopSection from "../TopSection/TopSection";
import CartProductHandler from "../CartProductHandler/CartProductHandler";
import FinalAmountComponent from "../FinalAmountComponent/FinalAmountComponent";
const Cart = () => {
  const {
    cartProducts,
    setCartProducts,
    productBgColors,
    productBorderColors,
  } = useContext(ProductContext);
  let { totalCartAmt, setTotalCartAmt } = useContext(ProductContext);

  const handlerIncreaseProductQty = (productId) => {
    setCartProducts(
      cartProducts.map((product, key) => {
        if (product.id === productId) {
          product.qty += 1;
          return product;
        }
        return product;
      })
    );
    setTotalCartAmt(
      (totalCartAmt += +cartProducts.find((product) => product.id === productId)
        .newPrice)
    );
  };
  const handlerDecreaseProductQty = (productId) => {
    setCartProducts(
      cartProducts.map((product, key) => {
        if (product.id === productId) {
          product.qty > 1 && (product.qty -= 1);
          return product;
        }
        return product;
      })
    );

    setTotalCartAmt(
      (totalCartAmt -= +cartProducts.find((product) => product.id === productId)
        .newPrice)
    );
  };
  const handlerProductBgColors = (key) => {
    return productBgColors[key % 3];
  };
  const handlerProductBorderColors = (key) => {
    return productBorderColors[key % 3];
  };

  return (
    <div className="flex flex-col h-screen">
      <TopSection topSectionTitle="My Cart" />
      <div
        className={`${
          cartProducts.length !== 0 &&
          "rounded-t-3xl px-5 pb-5 pt-5 mt-6 overflow-hidden cartContainer cursor-pointer"
        } grow`}
      >
        <div className="overflow-y-scroll  h-[calc(100%-6rem)] pb-1">
          <CartProductHandler
            products={cartProducts}
            handlerProductBorderColors={handlerProductBorderColors}
            handlerProductBgColors={handlerProductBgColors}
            handlerIncreaseProductQty={handlerIncreaseProductQty}
            handlerDecreaseProductQty={handlerDecreaseProductQty}
          />
        </div>
      </div>
      <div className="h-24 bg-white fixed left-0 right-0 bottom-0 ">
        <div className="flex justify-between items-center px-5 mt-2">
          <p className="text-gray-400">Selected Items: {cartProducts.length}</p>
          <p className="text-gray-400">${totalCartAmt}.00</p>
        </div>
        <FinalAmountComponent
          text="Check Out"
          backgroundColor="bg-indigo-800"
          textColor="text-white"
          productAmount={totalCartAmt}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
