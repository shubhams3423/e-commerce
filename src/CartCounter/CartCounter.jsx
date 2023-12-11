import React from "react";

const CartCounter = ({ productCount }) => {
  return (
    <div>
      <span className="w-6 border-solid border-white border-2 absolute top-2 right-2 flex items-center justify-center text-sm text-white bg-red-500 rounded-2xl cursor-pointer ">
        {productCount >= 10
          ? 9 + "+"
          : productCount >= 100 && productCount <= 100
            ? 999 + "+"
            : productCount}
      </span>
    </div>
  );
};

export default CartCounter;
