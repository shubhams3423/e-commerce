import React from "react";
import EmptyCart from "../EmptyCart/EmptyCart";

const CartProductHandler = ({
  products,
  handlerProductBorderColors,
  handlerProductBgColors,
  handlerDecreaseProductQty,
  handlerIncreaseProductQty,
}) => {
  return (
    <div className="">
      {products.map((product, key) => {
        return (
          <div className="mt-2" key={key}>
            <div className="flex items-center justify-between rounded-2xl bg-white p-3 px-2">
              <div
                className={`rounded-full border-4 border-solid ${handlerProductBorderColors(
                  key,
                )}`}
              >
                <div
                  className={`m-1 h-20 w-20 rounded-full ${handlerProductBgColors(
                    key,
                  )}`}
                >
                  <img
                    src={product.img}
                    alt=""
                    className="relative left-3 top-2 h-full w-full"
                  />
                </div>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-blue-900">
                  {product.title}
                </p>
                <p className="font-bold text-blue-800 ">
                  ${product.newPrice}.00
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div
                  className="increamentBtn flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-white text-black"
                  onClick={() => handlerDecreaseProductQty(product.id)}
                >
                  <span>-</span>
                </div>
                <div>
                  <p>{product.qty}</p>
                </div>
                <div
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-cyan-300 text-black"
                  onClick={() => handlerIncreaseProductQty(product.id)}
                >
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductHandler;
