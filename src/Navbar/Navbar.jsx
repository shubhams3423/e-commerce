import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Meesho.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import ProductContext from "../productContext/ProductContext";
import { Link } from "react-router-dom";
import CartCounter from "../CartCounter/CartCounter";

const Navbar = () => {
  const [input, setInput] = useState("");
  const { setProducts, companyProductList, productCount } =
    useContext(ProductContext);
  const handleOnclickProducts = (e) => {
    if (e.key === "Enter") {
      setProducts(
        companyProductList.filter((product) =>
          product.title.toLowerCase().includes(input.toLowerCase())
        )
      );
      setInput("");
    }
  };
  return (
    <div>
      <div className="flex items-center px-8 py-1 h-16 navbar">
        <div className="w-1/5">
          <div className="w-10 h-10 sm:w-12 sm:h-12">
            <img src={logo} alt="logo" className="rounded-lg cursor-pointer" />
          </div>
        </div>
        <div className="flex grow justify-end gap-x-2 sm:justify-between">
          <div className=" ">
            <input
              type="text"
              value={input}
              className=" w-28 rounded-lg  py-0.5 px-2 border-solid border-2 border-black sm:w-40  "
              placeholder="Search product...."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleOnclickProducts}
            />
          </div>
          <div className="flex items-center ">
            <div className="flex items-center gap-x-2">
              <div className="flex items-center">
                <Link to="/cart">
                  <AiOutlineShoppingCart className="text-2xl cursor-pointer sm:text-3xl" />
                </Link>
                {productCount > 0 && (
                  <CartCounter productCount={productCount} />
                )}
              </div>
              <AiOutlineUser className="text-2xl cursor-pointer sm:text-3xl" />
              <AiOutlineHeart className="text-2xl cursor-pointer sm:text-3xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
