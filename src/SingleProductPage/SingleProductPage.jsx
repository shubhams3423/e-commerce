import React from "react";
import TopSection from "../TopSection/TopSection";
import SingleProductImage from "../SingleProductImage/SingleProductImage";
import SingleProductDetails from "../SingleProductDetails/SIngleProductDetails";
import { useParams } from "react-router-dom";
import { productObj } from "../ShoesObjects";
const SingleProductPage = () => {
  const { productId } = useParams();
  return (
    <div className="h-screen overflow-hidden">
      <div>
        <TopSection topSectionTitle="XE" showRedHeart={true} />
      </div>
      <div>
        <SingleProductImage product={productObj[productId - 1]} />
      </div>
      <div className="h-full">
        <SingleProductDetails
          product={productObj[productId - 1]}
          productId={productId - 1}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
