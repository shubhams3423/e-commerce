import React, { useState } from "react";
import ProductContext from "./ProductContext";
import { productObj } from "../file";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productObj);
  const [checkItems, setCheckedItems] = useState(["All", "All"]);
  const [companyProductList, setCompanyProductList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);
  let [totalCartAmt, setTotalCartAmt] = useState(0);
  const [productCount, SetProductCount] = useState(0);
  const [likedProducts, setLikedProducts] = useState([]);
  return (
    <div>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          checkItems,
          setCheckedItems,
          companyProductList,
          setCompanyProductList,
          cartProducts,
          setCartProducts,
          productIds,
          setProductIds,
          totalCartAmt,
          setTotalCartAmt,
          productCount,
          SetProductCount,
          likedProducts,
          setLikedProducts,
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
