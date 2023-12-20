import React, { useContext } from "react";
import "./Products.css";
import ProductContext from "../productContext/ProductContext";
import ProductsRender from "../ProductsRender/ProductsRender";
import ProductNotFound from "../ProductNoFound/ProductNotFound";
const Products = () => {
  const { products, setLikedProducts, setProducts } =
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
        product.likedProduct === true ? product : null,
      ),
    );
  };
  return (
    <div>
      {products.length === 0 ? (
        <ProductNotFound />
      ) : (
        <ProductsRender
          products={products}
          productHandlerFunction={handlerAddProductToLikedProducts}
          showLikedProducts={true}
          showRatings={true}
        />
      )}
    </div>
  );
};

export default Products;
