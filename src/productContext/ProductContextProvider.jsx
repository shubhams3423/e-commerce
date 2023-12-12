import React, { useState } from "react";
import ProductContext from "./ProductContext";
import { productObj } from "../file";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productObj);
  const [checkItems, setCheckedItems] = useState(["All", "All"]);
  const [companyProductList, setCompanyProductList] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [productIds, setProductIds] = useState([]);
  let [totalAmt, setTotalAmt] = useState(0);
  let [discountedAmt, setDiscountedAmt] = useState(0);
  const [productCount, SetProductCount] = useState(0);
  const [cartProductQty, setCartProductQty] = useState(0);
  const [likedProducts, setLikedProducts] = useState([{}]);
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
          cartProduct,
          setCartProduct,
          productIds,
          setProductIds,
          totalAmt,
          setTotalAmt,
          discountedAmt,
          setDiscountedAmt,
          productCount,
          SetProductCount,
          cartProductQty,
          setCartProductQty,
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
