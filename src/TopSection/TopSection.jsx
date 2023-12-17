import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const TopSection = ({ topSectionTitle, showRedHeart }) => {
  return (
    <div className="flex justify-between items-center mt-5 mx-4">
      <div>
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div>
        <div>
          {topSectionTitle === "XE" ? (
            <div>
              <span className="text-blue-800 text-2xl font-medium">X</span>
              <span className="text-emerald-300 text-sm font-medium">E</span>
            </div>
          ) : (
            <h2 className="font-bold">{topSectionTitle}</h2>
          )}
        </div>
      </div>
      <div>
        {showRedHeart ? (
          <div className="bg-red-500 rounded-full w-6 h-6 flex justify-center items-center">
            <TiHeartFullOutline className="text-white" />
          </div>
        ) : (
          <div className=" ">
            <MdDelete className="text-gray-600 text-2xl cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSection;
