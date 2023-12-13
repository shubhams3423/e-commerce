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
  const {
    cartProduct,
    setCartProduct,
    totalAmt,
    discountedAmt,
    SetProductCount,
    productCount,
    productIds,
    setProductIds,
    setTotalAmt,
    setDiscountedAmt,
    products,
    cartProductQty,
    setCartProductQty,
  } = useContext(ProductContext);
  const handlerRemoveProductFromCart = (productId) => {
    setCartProduct(
      cartProduct.filter((product, key) => product[0]?.id !== productId)
    );
    SetProductCount(productCount - 1);
    setProductIds(productIds.filter((id, key) => id !== productId));
    setTotalAmt(
      totalAmt -
        products.filter((product, key) => product.id === productId)[0].newPrice
    );
    setDiscountedAmt(
      discountedAmt -
        (products.filter((product, key) => product.id === productId)[0]
          .prevPrice -
          products.filter((product, key) => product.id === productId)[0]
            .newPrice)
    );
  };
  const handlerIncreaseProductQty = (productId) => {
    cartProduct.map((product) =>
      product[0].id === productId ? (product[0].qty += 1) : product[0].id
    );
    // increaseProductQty(+1);
  };
  const handlerDecreaseProductQty = () => {
    // setDecreaseProductQty();
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
          cartProduct.length !== 0 &&
          "rounded-t-3xl pt-3 mt-6 overflow-hidden cartContainer cursor-pointer"
        } grow`}
      >
        <div className="overflow-y-scroll h-full ">
          <div className="px-3 pb-5">
            {cartProduct.length === 0
              ? "Empty Cart"
              : cartProduct.map((product, key) => {
                  return product.length !== 0 ? (
                    <div className="mt-2">
                      <div className="px-2 bg-white rounded-2xl p-3 flex items-center justify-between">
                        <div className="w-20">
                          <img src={product[0]?.img} alt="" />
                        </div>
                        <div>
                          <p className=" text-blue-900 font-medium mb-1 cartProuductTitle">
                            {product[0].title}
                          </p>
                          <p className="text-blue-800 font-bold  ">
                            <sup className="text-blue-900 me-1">$</sup>
                            {product[0].newPrice}.00
                          </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <div className="bg-white text-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer increamentBtn">
                            <button
                              className="bg-transparent"
                              onClick={() =>
                                handlerDecreaseProductQty(product[0].id)
                              }
                            >
                              -
                            </button>
                          </div>
                          <div>
                            <p>{cartProductQty}</p>
                          </div>
                          <div className="bg-cyan-300 text-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer">
                            <button
                              className="bg-transparent w-full "
                              onClick={() =>
                                handlerIncreaseProductQty(product[0].id)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })}
          </div>
        </div>
      </div>
      <div className="rounded-2xl">
        <div className="flex justify-between items-center px-5 mt-2">
          <p className="text-gray-400">Selected Items: {cartProduct.length}</p>
          <p className="text-gray-400">${totalAmt}.00</p>
        </div>
        <div className="flex align-center footer-shadow px-5 py-2 justify-between mt-2   ">
          <div className="flex flex-col">
            <p>
              <sup className="me-1 font-extrabold ">$</sup>
              <span className="font-extrabold text-lg">{totalAmt}.00</span>
            </p>
          </div>
          <div className="">
            <button
              className="bg-indigo-800  rounded-3xl px-3 py-1 h-9"
              onClick={() =>
                discountedAmt > 0
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
