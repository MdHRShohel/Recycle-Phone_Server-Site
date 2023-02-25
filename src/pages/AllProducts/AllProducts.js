import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "./BookModal";

const AllProducts = () => {
const products = useLoaderData();
const [mobileData, setMobileData] = useState("");

  return (
    <div className="container mx-auto">
      <h1 className=" my-3 text-center text-4xl font-bold">
        Products on {products[0].category}
      </h1>
      <div className=" my-12 grid md:grid-cols-3 grid-cols-1 gap-12 mt-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg"
          >
            <img
              className="w-96 h-72 mx-auto"
              src={product.photo}
              alt="brand logo"
            />
            <h2 className="text-center text-3xl my-2 font-bold">
              {product.name}
            </h2>
            <p className="text-center font-medium text-2xl my-2">
              Selling Price : {product.resalePrice}
            </p>
            <p className="text-center font-bold">
              Original Price : {product.originalPrice}
            </p>
            <p className="text-center font-bold">
              Location : {product.location}
            </p>
            <p className="text-center font-bold">
              Product Used : {product.used}
            </p>
            <p className="text-center font-bold">
              Seller Name : {product.sellerName}
            </p>
            <label
              onClick={() => setMobileData(product)}
              htmlFor="book-modal"
              className="my-4 text-2xl font-semibold mx-auto w-full btn btn-outline"
            >
              Book Now
            </label>
          </div>
        ))}
      </div>
      {mobileData && (
        <BookModal
          mobileData={mobileData}
          setMobileData={setMobileData}
        ></BookModal>
      )}
    </div>
  );
};

export default AllProducts;
