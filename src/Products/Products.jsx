import React, { useContext } from "react";
import "./Products.css";
import ProductContext from "../productContext/ProductContext";
import { ToastContainer } from "react-toastify";
import ProductRender from "../ProductRender/ProductRender";
const Products = () => {
  const { products, setProducts, setLikedProducts } =
    useContext(ProductContext);
  const handlerAddProductToLikedProducts = (id) => {
    setProducts([
      ...products,
      products.map((product, key) => {
        if (product.id === id) {
          product.likedProduct = product.likedProduct === false ? true : false;
        }
      }),
    ]);
    setLikedProducts(
      products.filter((product, key) =>
        product.likedProduct === true ? product : null
      )
    );
  };
  return (
    <div>
      <ProductRender
        products={products}
        productHandler={handlerAddProductToLikedProducts}
        showLikedProducts={true}
        showRatings={true}
      />
      <ToastContainer />
    </div>
  );
};

export default Products;
