import React, { useContext } from "react";
import "./Cart.css";
import ProductContext from "../productContext/ProductContext";
import "react-toastify/dist/ReactToastify.css";
import TopSection from "../TopSection/TopSection";
import CartProductHandler from "../CartProductHandler/CartProductHandler";
import FinalAmount from "../FinalAmount/FinalAmount";
import EmptyCart from "../EmptyCart/EmptyCart";
const Cart = () => {
  const {
    cartProducts,
    setCartProducts,
    productBgColors,
    productBorderColors,
    setProductCount,
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
      }),
    );
    setTotalCartAmt(
      (totalCartAmt += +cartProducts.find((product) => product.id === productId)
        .newPrice),
    );
  };
  const handlerDecreaseProductQty = (productId) => {
    setCartProducts(
      cartProducts
        .map((product, key) => {
          if (product.id === productId) {
            setTotalCartAmt(
              (totalCartAmt -= +cartProducts.find(
                (product) => product.id === productId,
              ).newPrice),
            );
            product.qty -= 1;
            if (product.qty === 0) {
              product.qty = 1;
              setProductCount(cartProducts.length - 1);
              return false;
            } else {
              return product;
            }
          }
          return product;
        })
        .filter((product, key) => product !== false),
    );
  };
  const handlerProductBgColors = (key) => {
    return productBgColors[key % 3];
  };
  const handlerProductBorderColors = (key) => {
    return productBorderColors[key % 3];
  };

  return (
    <div className="flex h-screen flex-col">
      <TopSection topSectionTitle="My Cart" showDeleteIcon={true} />
      <div
        className={`${
          cartProducts.length !== 0 &&
          "cartContainer mt-6 cursor-pointer overflow-hidden rounded-t-3xl px-5 pb-5 pt-5"
        } grow`}
      >
        <div
          className={`${
            cartProducts.length === 0 && "emptyCart"
          } h-[calc(100%-6rem)] overflow-y-scroll pb-1`}
        >
          {cartProducts.length === 0 ? (
            <EmptyCart />
          ) : (
            <CartProductHandler
              products={cartProducts}
              handlerProductBorderColors={handlerProductBorderColors}
              handlerProductBgColors={handlerProductBgColors}
              handlerIncreaseProductQty={handlerIncreaseProductQty}
              handlerDecreaseProductQty={handlerDecreaseProductQty}
            />
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-white">
        <div className="mt-2 flex items-center justify-between px-5">
          <p className="text-gray-400">Selected Items: {cartProducts.length}</p>
          <p className="text-gray-400">${totalCartAmt}.00</p>
        </div>
        <FinalAmount
          text="Check Out"
          backgroundColor="bg-indigo-800"
          textColor="text-white"
          productAmount={totalCartAmt}
        />
      </div>
    </div>
  );
};

export default Cart;
