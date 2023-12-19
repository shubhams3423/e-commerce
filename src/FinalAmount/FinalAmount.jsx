import React, { useContext } from "react";
import { BiSolidLogInCircle } from "react-icons/bi";
import { productObj } from "../ShoesObjects";
import ProductContext from "../productContext/ProductContext";

const FinalAmount = ({
  text,
  backgroundColor,
  textColor,
  productAmount,
  productId,
}) => {
  const { cartProducts, setCartProducts, setProductCount } =
    useContext(ProductContext);
  let { setTotalCartAmt, totalCartAmt } = useContext(ProductContext);
  const handlerAddProductToCart = (id) => {
    if (
      cartProducts.includes(productObj.find((product) => product.id === id))
    ) {
      setCartProducts(
        cartProducts.map((product, key) => {
          if (product.id === id) {
            product.qty += 1;
            return product;
          }
          return product;
        }),
      );
    } else {
      setCartProducts([
        ...cartProducts,
        productObj.find((product) => product.id === id),
      ]);
      setProductCount(cartProducts.length + 1);
    }
    setTotalCartAmt(
      (totalCartAmt += +productObj.find((product) => product.id === id)
        .newPrice),
    );
  };
  return (
    <div className="align-center footer-shadow mt-2 flex justify-between px-5 py-2">
      <div className="flex flex-col">
        <p className="text-3xl font-bold">${productAmount}.00</p>
      </div>
      <div className="">
        <button
          className={`${backgroundColor} h-9 rounded-3xl px-3 py-1`}
          onClick={() => handlerAddProductToCart(Number(productId) + 1)}
        >
          <span
            className={`font-medium ${textColor} flex items-center text-sm opacity-90`}
          >
            <BiSolidLogInCircle className="mr-1" /> {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FinalAmount;
