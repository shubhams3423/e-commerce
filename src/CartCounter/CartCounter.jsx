import React from "react";

const CartCounter = ({ productCount }) => {
  return (
    <div>
      <span className="absolute right-2 top-2 flex w-6 cursor-pointer items-center justify-center rounded-2xl border-2 border-solid border-white bg-red-500 text-sm text-white">
        {productCount >= 10
          ? 9 + "+"
          : productCount >= 100 && productCount <= 1000
            ? 999 + "+"
            : productCount}
      </span>
    </div>
  );
};

export default CartCounter;
