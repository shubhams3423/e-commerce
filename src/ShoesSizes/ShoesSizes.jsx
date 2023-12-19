import React from "react";

const ShoesSizes = ({ availableProductSize }) => {
  return (
    <div className="flex grow items-center justify-evenly">
      {availableProductSize.map((productSize, key) => {
        return (
          <div key={key} className="cursor-pointer rounded px-2  py-1">
            <p className=" font-semibold">{productSize}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShoesSizes;
