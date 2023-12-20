import React from "react";
const ProductsColors = ({ availableProductColors }) => {
  return (
    <div className="flex items-center justify-evenly">
      {availableProductColors.map((productColor, key) => {
        return (
          <div
            className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-${productColor}-200`}
          >
            <p className={`h-4 w-4 rounded-full bg-${productColor}-500`}></p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsColors;
