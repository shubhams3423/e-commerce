import React, { useContext } from "react";
import "./TopMenu.css";
import ProductContext from "../productContext/ProductContext";
const TopMenu = () => {
  const { setProducts, companyProductList } = useContext(ProductContext);

  const handlerBrandProducts = (e) => {
    setProducts(
      companyProductList.filter(
        (product, key) =>
          product.company.toLowerCase() ===
          (e.target.value === "All"
            ? product.company.toLowerCase()
            : e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="">
        <h1 className="pl-2 mb-3">Recommended</h1>
        <div className="flex gap-x-2 pl-2  ">
          <button
            className="rounded  bg-slate-300 px-3 py-0 text-xs sm:text-base"
            value="All"
            onClick={handlerBrandProducts}
          >
            All
          </button>
          <button
            className="rounded  bg-slate-300 px-1 text-xs sm:px-3 sm:py-1 sm:text-base"
            value="Nike"
            onClick={handlerBrandProducts}
          >
            Nike
          </button>
          <button
            className="rounded  bg-slate-300 px-1 text-xs sm:px-3 sm:py-1 sm:text-base"
            value="Adidas"
            onClick={handlerBrandProducts}
          >
            Adidas
          </button>
          <button
            className="rounded  bg-slate-300 px-1 text-xs sm:px-3 sm:py-1 sm:text-base"
            value="Puma"
            onClick={handlerBrandProducts}
          >
            Puma
          </button>
          <button
            className="rounded  bg-slate-300 px-1 text-xs sm:px-3 sm:py-1 sm:text-base"
            value="Vans"
            onClick={handlerBrandProducts}
          >
            Vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
