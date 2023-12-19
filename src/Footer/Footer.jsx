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
    <div className="fixed bottom-0 left-0 right-0 flex h-12 items-center bg-white ">
      <div className="bottomLeftMenu flex  h-full  flex-grow items-center  justify-around">
        <div className="">
          <NavLink to="/">
            <IoMdHome className="footerIcon text-2xl text-gray-400" />
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/likedProducts">
            <TiHeartFullOutline className="footerIcon text-2xl text-gray-400" />
          </NavLink>
        </div>
      </div>
      <div>
        <div className="cartIcon border-10 relative bottom-8 flex justify-center rounded-full px-3 py-3">
          <div className=" rounded-full bg-indigo-800 p-3">
            <NavLink to="/cart">
              <PiShoppingCartFill className="footerIcon text-4xl text-white" />
            </NavLink>
            {productCount > 0 && <CartCounter productCount={productCount} />}
          </div>
        </div>
      </div>
      <div className="bottomRightMenu flex h-full flex-grow items-center justify-around">
        <div className="">
          <MdStickyNote2 className="footerIcon text-2xl text-gray-400" />
        </div>
        <div className="">
          <NavLink to="/user">
            <IoMdPerson className="footerIcon text-2xl text-gray-400" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
