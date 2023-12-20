import React, { useContext, useState } from "react";
import ProductContext from "../productContext/ProductContext";
import TopSection from "../TopSection/TopSection";
import SearchProductComponent from "../SearchProduct/SearchProductComponent";
import ProductsRender from "../ProductsRender/ProductsRender";
import { productObj } from "../ShoesObjects";
const LikedProduct = () => {
  const { likedProducts, cartProducts, setCartProducts, setProductCount } =
    useContext(ProductContext);
  let { totalCartAmt, setTotalCartAmt } = useContext(ProductContext);
  const [selectedProducts, setSelectedProduct] = useState(likedProducts);
  const handlerAddProductToCart = (id) => {
    if (
      cartProducts.includes(productObj.find((product) => product.id === id))
    ) {
      setCartProducts(
        cartProducts.map((product, key) => {
          if (product.id === id) {
            product.qty += 1;
            return product;
          }
          return product;
        }),
      );
    } else {
      setCartProducts([
        ...cartProducts,
        productObj.find((product) => product.id === id),
      ]);
      setProductCount(cartProducts.length + 1);
    }

    setTotalCartAmt(
      (totalCartAmt += +likedProducts.find((product) => product.id === id)
        .newPrice),
    );
  };
  const handlerInputProudct = (e) => {
    setSelectedProduct(
      likedProducts.filter((product, key) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-full overflow-hidden px-2 ">
        <TopSection topSectionTitle="For You" showRedHeart={true} />
        <div className="mx-4 mb-5 mt-4 flex items-center">
          <SearchProductComponent inputFunction={handlerInputProudct} />
        </div>
        <div className=" h-[calc(100%-7rem)] overflow-y-scroll">
          {selectedProducts.length === 0 ? (
            <h1>There is no product yet.</h1>
          ) : (
            <ProductsRender
              products={selectedProducts}
              productHandlerFunction={handlerAddProductToCart}
              addTocart={true}
              isLikedProduct={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedProduct;
