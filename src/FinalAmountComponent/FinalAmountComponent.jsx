import React, { useContext } from "react";
import { BiSolidLogInCircle } from "react-icons/bi";
import { productObj } from "../ShoesObjects";
import ProductContext from "../productContext/ProductContext";

const FinalAmountComponent = ({
  text,
  backgroundColor,
  textColor,
  productAmount,
  productId,
}) => {
  const { cartProducts, setCartProducts, SetProductCount } =
    useContext(ProductContext);
  let { setTotalCartAmt, totalCartAmt } = useContext(ProductContext);
  const handlerAddProductToCart = (id) => {
    setCartProducts([
      ...cartProducts,
      productObj.find((product) => product.id === id),
    ]);
    setTotalCartAmt(
      (totalCartAmt += +productObj.find((product) => product.id === id)
        .newPrice)
    );
    SetProductCount(cartProducts.length + 1);
  };
  return (
    <div className="flex align-center footer-shadow px-5 py-2 justify-between mt-2">
      <div className="flex flex-col">
        <p className="font-bold text-3xl">${productAmount}.000</p>
      </div>
      <div className="">
        <button
          className={`${backgroundColor} rounded-3xl px-3 py-1 h-9`}
          onClick={() => handlerAddProductToCart(Number(productId) + 1)}
        >
          <span
            className={`font-medium ${textColor} checkoutBtn flex items-center`}
          >
            <BiSolidLogInCircle className="mr-1" /> {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FinalAmountComponent;
