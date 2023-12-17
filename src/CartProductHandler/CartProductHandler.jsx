import React from "react";

const CartProductHandler = ({
  products,
  handlerProductBorderColors,
  handlerProductBgColors,
  handlerDecreaseProductQty,
  handlerIncreaseProductQty,
}) => {
  return (
    <div className="">
      {products.length === 0 ? (
        <p className="px-5">Empty Cart</p>
      ) : (
        products.map((product, key) => {
          return (
            <div className="mt-2" key={key}>
              <div className="px-2 bg-white rounded-2xl p-3 flex items-center justify-between">
                <div
                  className={`rounded-full border-4 border-solid ${handlerProductBorderColors(
                    key
                  )}`}
                >
                  <div
                    className={`w-20 h-20 rounded-full productContainer ${handlerProductBgColors(
                      key
                    )}`}
                  >
                    <img
                      src={product.img}
                      alt=""
                      className="h-full w-full relative top-2 left-3"
                    />
                  </div>
                </div>
                <div>
                  <p className=" text-blue-900 font-medium mb-1 cartProuductTitle">
                    {product.title}
                  </p>
                  <p className="text-blue-800 font-bold ">
                    ${product.newPrice}.00
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-white text-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer increamentBtn">
                    <button
                      className="bg-transparent text-lg"
                      onClick={() => handlerDecreaseProductQty(product.id)}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p>{product.qty}</p>
                  </div>
                  <div className="bg-cyan-300 text-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer">
                    <button
                      className="bg-transparent w-full  "
                      onClick={() => handlerIncreaseProductQty(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CartProductHandler;
