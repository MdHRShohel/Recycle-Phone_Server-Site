import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseAdmin from "../../Hooks/UseAdmin";

const Advertise = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  //console.log(user);
  const [advertised, setAdvertised] = useState([]);
  useEffect(() => {
    fetch("https://recycle-phone-server.vercel.app/advertise")
      .then((res) => res.json())
      .then((data) => {
        // console.log(showSellers)
        setAdvertised(data);
      });
  }, [advertised]);
  const length = advertised.length;
  if (length === 0) {
    return;
  }
  // delete advertised
  const handleDelete = (product) => {
    fetch(`https://recycle-phone-server.vercel.app/advertise/${product._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("advertised Deleted Successfully");
        }
      });
  };
  return (
    <div>
      {advertised.length === 0 ? (
        <h2> </h2>
      ) : (
        <>
          <h2 className="text-4xl font-semibold text-center m-8">Advertised Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-5 md:m-20">
            {advertised.map((product) => (
              //console.log(product),
              <div
                key={product._id}
                className="card w-full shadow-xl bg-blue-500"
              >
                <div className="card-body mx-auto">
                  <img src={product.Photo} className="h-60" alt="" />
                  <h2 className="card-title">
                    Product Name: {product.productName}
                  </h2>
                  <h2 className="text-xl">Seller Name: {product.sellerName}</h2>
                  <h2 className="text-xl">
                    Resale Price: {product.resalePrice} BDT
                  </h2>
                  <h2 className="text-xl">Location: {product.location}</h2>
                  <h2 className="text-xl">
                    Current Condition: {product.condition}
                  </h2>
                  <h2 className="text-xl">Used Time: {product.used}</h2>
                  <div className="flex justify-evenly mt-10"></div>
                  {/* <Link>
                    <button className="btn btn-primary">Book Now</button>
                  </Link> */}
                  {isAdmin && (
                    <Link onClick={() => handleDelete(product)}>
                      <button className="btn bg-red-700">Delete</button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Advertise;
