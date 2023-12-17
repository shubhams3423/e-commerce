import React, { useContext, useState } from "react";
import ProductContext from "../productContext/ProductContext";

import "./LikedProduct.css";
import ProductRender from "../ProductRender/ProductRender";
import TopSection from "../TopSection/TopSection";
import SearchProductComponent from "../SearchProduct/SearchProductComponent";
const LikedProduct = () => {
  const { likedProducts, cartProducts, setCartProducts, SetProductCount } =
    useContext(ProductContext);
  let { totalCartAmt, setTotalCartAmt } = useContext(ProductContext);
  const [selectedProducts, setSelectedProduct] = useState(likedProducts);
  const handlerAddProductToCart = (id) => {
    setCartProducts([
      ...cartProducts,
      likedProducts.find((obj) => obj.id === id),
    ]);
    setTotalCartAmt(
      (totalCartAmt += +likedProducts.find((product) => product.id === id)
        .newPrice)
    );
  };
  SetProductCount(cartProducts.length);
  const handlerInputProudct = (e) => {
    setSelectedProduct(
      likedProducts.filter((product, key) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="px-2 overflow-hidden h-full ">
        <TopSection topSectionTitle="For You" showRedHeart={true} />
        <div className="flex items-center mt-4 mx-4 mb-5">
          <SearchProductComponent inputFunction={handlerInputProudct} />
        </div>
        <div className="h-full overflow-scroll ">
          <ProductRender
            products={selectedProducts}
            productHandler={handlerAddProductToCart}
            addTocart={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LikedProduct;
