import React, { useContext } from "react";
import ProductContext from "../productContext/ProductContext";

const SingleProductImage = ({ product }) => {
  const { productBgColors, productBorderColors } = useContext(ProductContext);
  return (
    <div className="h-56">
      <div className="secondLayer mt-9 flex justify-center">
        <div
          className={`border-2 border-solid ${
            productBorderColors[product.id % 3]
          } rounded-full w-52 h-52 flex justify-center items-center`}
        >
          <div
            className={`${
              productBgColors[product.id % 3]
            } w-44 h-44 rounded-full flex items-center justify-center`}
          >
            <div className="bg-white w-28 h-28 rounded-full">
              <div className="w-28 h-28">
                <img
                  src={product.img}
                  className="relative w-full h-full left-2 "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductImage;
