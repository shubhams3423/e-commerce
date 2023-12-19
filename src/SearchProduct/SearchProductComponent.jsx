import React from "react";

const SearchProductComponent = ({ inputFunction }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        className={` mr-2 w-full rounded-lg px-3 py-1  outline-none`}
        placeholder="Search..."
        onChange={inputFunction}
      />
    </div>
  );
};

export default SearchProductComponent;
