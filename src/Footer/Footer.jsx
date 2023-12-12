import React, { useContext } from "react";
import "./Footer.css";
import { IoMdHome } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdStickyNote2 } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import ProductContext from "../productContext/ProductContext";
import CartCounter from "../CartCounter/CartCounter";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const { productCount } = useContext(ProductContext);
  return (
    <div className="h-12 bg-white flex items-center fixed left-0 right-0 bottom-0 ">
      <div className="flex justify-around  flex-grow  h-full items-center  bottomLeftMenu">
        <div className="">
          <NavLink to="/">
            <IoMdHome className="text-2xl text-gray-400" />
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/likedProducts">
            <TiHeartFullOutline className="text-2xl text-gray-400" />
          </NavLink>
        </div>
      </div>
      <div>
        <div className="flex justify-center relative py-3 px-3 bottom-8 cartIcon border-10 rounded-full">
          <div className=" bg-purple-500 p-3 rounded-full">
            <NavLink to="/cart">
              <PiShoppingCartFill className="text-4xl text-white" />
            </NavLink>
            {productCount > 0 && <CartCounter productCount={productCount} />}
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-grow h-full items-center bottomRightMenu">
        <div className="">
          <MdStickyNote2 className="text-2xl text-gray-400" />
        </div>
        <div className="">
          <NavLink to="/user">
            <IoMdPerson className="text-2xl text-gray-400" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
