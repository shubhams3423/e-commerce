import React from "react";
import { Link } from "react-router-dom";

const CartCounter = ({ productCount }) => {
  return (
    <div>
      <Link to="/cart">
        <span className="absolute top-4 right-24 px-1 text-xs sm:right-28 text-white bg-red-500 rounded cursor-pointer ">
          {productCount >= 10
            ? 9 + "+"
            : productCount >= 100 && productCount <= 100
            ? 999 + "+"
            : productCount}
        </span>
      </Link>
    </div>
  );
};

export default CartCounter;
