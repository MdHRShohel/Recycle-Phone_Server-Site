import React from "react";
import apple from "../../asstes/BrandsLogo/apple.jpg";
import honor from "../../asstes/BrandsLogo/honor.jpg";
import mi from "../../asstes/BrandsLogo/mi.jpg";
import oneplus from "../../asstes/BrandsLogo/oneplus.jpg";
import oppo from "../../asstes/BrandsLogo/oppo.jpg";
import samsung from "../../asstes/BrandsLogo/samsung.jpg";

const Brands = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-center font-bold">Popular Brands</h2>
      <div className="divider w-20 "></div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-2">
        <div className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
          <img src={apple} alt="brand logo" />
        </div>
        <div className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
          <img src={oneplus} alt="brand logo" />
        </div>
        <div className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
          <img src={oppo} alt="brand logo" />
        </div>
        <div className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
          <img src={mi} alt="brand logo" />
        </div>
        <div className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
          <img src={honor} alt="brand logo" />
        </div>
        <div className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
          <img src={samsung} alt="brand logo" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
