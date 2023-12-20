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
          } flex h-52 w-52 items-center justify-center rounded-full`}
        >
          <div
            className={`${
              productBgColors[product.id % 3]
            } flex h-44 w-44 items-center justify-center rounded-full`}
          >
            <div className="h-24 w-24 rounded-full bg-white">
              <div className="h-32 w-32">
                <img src={product.img} className="h-full w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductImage;
