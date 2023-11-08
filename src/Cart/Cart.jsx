import React, { useContext } from "react";
import "./Cart.css";
import ProductContext from "../productContext/ProductContext";
import { Link } from "react-router-dom";
import logo from "../Meesho.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUser } from "react-icons/ai";
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

  return (
    <div className="flex justify-between flex-col h-screen overflow-hidden  ">
      <div className="overflow-y-scroll">
        <div>
          <div className="flex items-center px-8 py-1 h-12 navbar">
            <div className="w-1/5">
              <div className="w-10 h-10 sm:w-12 sm:h-12">
                <img
                  src={logo}
                  alt="logo"
                  className="rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div className="flex grow justify-end gap-x-2  ">
              <div className="flex items-center ">
                <div className="flex items-center gap-x-2">
                  <AiOutlineUser className="text-2xl cursor-pointer sm:text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-3 pt-3">
          {cartProduct.length === 0
            ? "Empty Cart"
            : cartProduct.map((product, key) => {
                return product.length !== 0 ? (
                  <div className="mt-5">
                    <div className="px-2">
                      <div className="flex justify-between mb-3">
                        <div className="w-20">
                          <img src={product[0]?.img} alt="" />
                        </div>
                        <div>
                          <p>{product[0].title}</p>
                        </div>
                      </div>
                      <div className="mb-2 flex justify-between">
                        <div className="flex">
                          <div>
                            <button className="px-2  bg-slate-300 rounded me-1">
                              -
                            </button>
                            <span>{0}</span>
                            <button className="px-2  bg-slate-300 rounded ms-1">
                              +
                            </button>
                          </div>
                          <div className="ml-4">
                            <p
                              className="text-gray-500 cursor-pointer"
                              onClick={() =>
                                handlerRemoveProductFromCart(product[0].id)
                              }
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <p className="mr-3 line-through text-slate-500">
                            {product[0].prevPrice}$
                          </p>
                          <p>{product[0].newPrice}$</p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                ) : null;
              })}
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-1">
          <Link to="/" className="text-blue-500">
            Continue Shopping
          </Link>
        </div>
        <div className="flex align-center footer-shadow px-5 py-2 justify-between mt-2   ">
          <div className="flex flex-col">
            <p className="text-green-500">Discount: {discountedAmt}$</p>
            <p>{totalAmt}$</p>
          </div>
          <div className="">
            <button
              className="bg-yellow-400 font-medium rounded px-3 py-2"
              onClick={() =>
                discountedAmt > 0
                  ? toast.success("Your order placed")
                  : toast.warning("Please buy something")
              }
            >
              Place Order
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
