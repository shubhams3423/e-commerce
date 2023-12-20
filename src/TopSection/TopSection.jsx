import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import ProductContext from "../productContext/ProductContext";

const TopSection = ({ topSectionTitle, showRedHeart, showDeleteIcon }) => {
  const { setCartProducts, setProductCount } = useContext(ProductContext);
  let { setTotalCartAmt } = useContext(ProductContext);
  const removeAllProductsHandler = () => {
    setCartProducts([]);
    setProductCount(0);
    setTotalCartAmt(0);
  };
  return (
    <div className="mx-4 mt-5 flex items-center justify-between">
      <div>
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div>
        <div>
          {topSectionTitle === "XE" ? (
            <div>
              <span className="text-2xl font-medium text-blue-800">X</span>
              <span className="text-sm font-medium text-emerald-300">E</span>
            </div>
          ) : (
            <h2 className="font-bold">{topSectionTitle}</h2>
          )}
        </div>
      </div>
      <div>
        {showRedHeart && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
            <TiHeartFullOutline className="text-white" />
          </div>
        )}
        {showDeleteIcon && (
          <div className=" ">
            <MdDelete
              className="cursor-pointer text-2xl text-gray-600"
              onClick={removeAllProductsHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSection;
