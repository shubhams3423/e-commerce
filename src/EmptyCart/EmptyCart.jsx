import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="h-full px-5 pt-20">
      <div>
        <img
          src="https://karamonline.com/skin/frontend/default/ma_cance/images/empty.jpg"
          alt=""
          className="m-auto"
        />
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold">Your Cart is Empty</h1>
        <p className="m-auto w-1/2 text-center text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
      <div className="mt-8 text-center">
        <Link to="/">
          <button className="py-x h-10 w-4/5 rounded-2xl bg-gray-200 font-bold text-red-500">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
