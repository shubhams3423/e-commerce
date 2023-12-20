import React, { useContext } from "react";
import "./Sidebar.css";
import ProductContext from "../productContext/ProductContext";
import { productObj } from "../file";
const Sidebar = () => {
  const { checkItems, setProducts, setCompanyProductList } =
    useContext(ProductContext);
  const handleCategoryOnchange = (e) => {
    checkItems.splice(0, 1);
    checkItems.unshift(e.target.value);
    setProducts(
      productObj.filter(
        (product, key) =>
          product.category.toLowerCase() ===
            (checkItems[0] === "All"
              ? product.category.toLowerCase()
              : checkItems[0].toLowerCase()) &&
          (checkItems[1] === "All"
            ? product.category.toLowerCase()
            : product.color === checkItems[1]),
      ),
    );
    setCompanyProductList(
      productObj.filter(
        (product, key) =>
          product.category.toLowerCase() ===
            (checkItems[0] === "All"
              ? product.category.toLowerCase()
              : checkItems[0].toLowerCase()) &&
          (checkItems[1] === "All"
            ? product.category.toLowerCase()
            : product.color === checkItems[1]),
      ),
    );
  };

  const handlerOnclickColorProduct = (e) => {
    checkItems.splice(1);
    checkItems.push(e.target.value);
    setProducts(
      productObj.filter(
        (product, key) =>
          product.category.toLowerCase() ===
            (checkItems[0] === "All"
              ? product.category.toLowerCase()
              : checkItems[0].toLowerCase()) &&
          (checkItems[1] === "All"
            ? product.category.toLowerCase()
            : product.color === checkItems[1]),
      ),
    );
    setCompanyProductList(
      productObj.filter(
        (product, key) =>
          product.category.toLowerCase() ===
            (checkItems[0] === "All"
              ? product.category.toLowerCase()
              : checkItems[0].toLowerCase()) &&
          (checkItems[1] === "All"
            ? product.category.toLowerCase()
            : product.color === checkItems[1]),
      ),
    );
  };
  return (
    <div className=" sidebar flex w-32  flex-col gap-y-7 ">
      <div className="">
        <h1>Category</h1>
        <div className="flex flex-col ">
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item"
              id="All"
              value="All"
              defaultChecked
              onClick={handleCategoryOnchange}
            />
            <lable htmlFor="">All</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item"
              id="Sneakers"
              value="Sneakers"
              onClick={handleCategoryOnchange}
            />
            <lable htmlFor="Sneakers">Sneakers</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item"
              id=""
              value="Flats"
              onClick={handleCategoryOnchange}
            />
            <lable htmlFor="Flats">Flats</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item"
              id="sandals"
              value="Sandals"
              onClick={handleCategoryOnchange}
            />
            <lable htmlFor="sandals">Sandals</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item"
              id="Heels"
              value="Heels"
              onClick={handleCategoryOnchange}
            />
            <lable htmlFor="Heels">Heels</lable>
          </div>
        </div>
        <div className=""></div>
      </div>

      {/* <div className="">
        <h1>Price</h1>
        <div className="flex flex-col">
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item1"
              id=""
              value="all"
              defaultChecked
              onClick={handlerOnclickPrice}
            />
            <lable>All</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item1"
              id=""
              value={[0, 20]}
              onClick={handlerOnclickPrice}
            />
            <lable>$0-20</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item1"
              id=""
              value={[50, 100]}
              onClick={handlerOnclickPrice}
            />
            <lable>$50-100</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item1"
              id=""
              value={[100, 150]}
              onClick={handlerOnclickPrice}
            />
            <lable>$100-150</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item1"
              id=""
              value={[150]}
              onClick={handlerOnclickPrice}
            />
            <lable>Over $150</lable>
          </div>
        </div>
        <div className=""></div>
      </div> */}

      <div className="">
        <h1>Colors</h1>
        <div className="flex flex-col">
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item2"
              value="All"
              id="All2"
              defaultChecked
              onClick={handlerOnclickColorProduct}
            />
            <lable htmlFor="All2">All</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item2"
              id="black"
              value="black"
              onClick={handlerOnclickColorProduct}
            />
            <lable htmlFor="black">Black</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item2"
              id="blue"
              value="blue"
              onClick={handlerOnclickColorProduct}
            />
            <lable htmlFor="blue">Blue</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item2"
              id="red"
              value="red"
              onClick={handlerOnclickColorProduct}
            />
            <lable htmlFor="red">Red</lable>
          </div>
          <div className="flex gap-x-3">
            <input
              type="radio"
              name="item2"
              id="white"
              value="white"
              onClick={handlerOnclickColorProduct}
            />
            <lable htmlFor="white">white</lable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
