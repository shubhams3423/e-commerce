import React, { useContext } from "react";
import "./Cart.css";
import ProductContext from "../productContext/ProductContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(ProductContext);
  let { totalCartAmt, setTotalCartAmt } = useContext(ProductContext);

  const handlerIncreaseProductQty = (productId) => {
    setCartProducts(
      cartProducts.map((product, key) => {
        if (product.id === productId) {
          product.qty += 1;
          return product;
        }
        return product;
      })
    );
    setTotalCartAmt(
      (totalCartAmt += +cartProducts.find((product) => product.id === productId)
        .newPrice)
    );
  };
  const handlerDecreaseProductQty = (productId) => {
    setCartProducts(
      cartProducts.map((product, key) => {
        if (product.id === productId) {
          product.qty > 1 && (product.qty -= 1);
          return product;
        }
        return product;
      })
    );
    setTotalCartAmt(
      (totalCartAmt -= +cartProducts.find((product) => product.id === productId)
        .newPrice)
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center mt-5 mx-4 mb-3">
        <div>
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <div>
          <h1 className="font-bold text-lg">My Cart</h1>
        </div>
        <div className=" ">
          <MdDelete className="text-gray-600 text-2xl cursor-pointer" />
        </div>
      </div>
      <div
        className={`${
          cartProducts.length !== 0 &&
          "rounded-t-3xl px-5 pb-5 pt-5 mt-6 overflow-hidden cartContainer cursor-pointer"
        } grow`}
      >
        <div className="overflow-y-scroll  h-[calc(100%-6rem)] pb-1">
          <div className="">
            {cartProducts.length === 0 ? (
              <p className="px-5">Empty Cart</p>
            ) : (
              cartProducts.map((product, key) => {
                return (
                  <div className="mt-2">
                    <div className="px-2 bg-white rounded-2xl p-3 flex items-center justify-between">
                      <div className="w-20">
                        <img src={product.img} alt="" />
                      </div>
                      <div>
                        <p className=" text-blue-900 font-medium mb-1 cartProuductTitle">
                          {product.title}
                        </p>
                        <p className="text-blue-800 font-bold  ">
                          <sup className="text-blue-900 me-1">$</sup>
                          {product.newPrice}.00
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="bg-white text-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer increamentBtn">
                          <button
                            className="bg-transparent text-lg"
                            onClick={() =>
                              handlerDecreaseProductQty(product.id)
                            }
                          >
                            -
                          </button>
                        </div>
                        <div>
                          <p>{product.qty}</p>
                        </div>
                        <div className="bg-cyan-200 text-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer">
                          <button
                            className="bg-transparent w-full  "
                            onClick={() =>
                              handlerIncreaseProductQty(product.id)
                            }
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
        </div>
      </div>
      <div className="h-24 bg-white fixed left-0 right-0 bottom-0 ">
        <div className="flex justify-between items-center px-5 mt-2">
          <p className="text-gray-400">Selected Items: {cartProducts.length}</p>
          <p className="text-gray-400">${totalCartAmt}.00</p>
        </div>
        <div className="flex align-center footer-shadow px-5 py-2 justify-between mt-2   ">
          <div className="flex flex-col">
            <p>
              <sup className="me-1 font-extrabold ">$</sup>
              <span className="font-extrabold text-lg">{totalCartAmt}.00</span>
            </p>
          </div>
          <div className="">
            <button
              className="bg-indigo-800 rounded-3xl px-3 py-1 h-9"
              onClick={() =>
                cartProducts.length > 0
                  ? toast.success("Your order placed")
                  : toast.warning("Please buy something")
              }
            >
              <span className="font-medium   text-white checkoutBtn flex items-center ">
                <BiSolidLogInCircle className="mr-1" /> Check Out
              </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
