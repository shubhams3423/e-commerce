import React from "react";

const SearchProductComponent = ({ inputFunction }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        className={` w-full rounded-lg py-1 px-3 mr-2  outline-none`}
        placeholder="Search..."
        onChange={inputFunction}
      />
    </div>
  );
};

export default SearchProductComponent;
