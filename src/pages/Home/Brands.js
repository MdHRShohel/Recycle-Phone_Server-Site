import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Brands = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("https://recycle-phone-server.vercel.app/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    }
    ,[])

  return (
    <div className="my-8 container mx-auto">
      <h2 className="text-4xl text-center font-bold">Available Brands</h2>
      
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-6">
        {categories.map((category) => (
          <div
            key={category._id}
            className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg"
          >
            <img className="w-full" src={category.photo} alt="brand logo" />
            <h2 className="text-center font-bold">{category.name}</h2>
            <Link to={`/products/${category.name}`}>
            <button className="my-4 mx-auto w-full btn btn-outline">View Products</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
