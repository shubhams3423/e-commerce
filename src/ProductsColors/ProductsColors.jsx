import React from "react";
import { twMerge } from "tailwind-merge";
const ProductsColors = ({ availableProductColors }) => {
  return (
    <div className="flex items-center justify-evenly">
      {availableProductColors.map((productColor, key) => {
        return (
          <div
            className={twMerge(
              "flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-solid",
              `border-${productColor}-200`,
            )}
          >
            <p
              className={twMerge(
                "h-4 w-4 rounded-full",
                `bg-${productColor}-500`,
              )}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsColors;
