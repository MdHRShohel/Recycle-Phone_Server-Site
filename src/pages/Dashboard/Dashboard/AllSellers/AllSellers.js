import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const showSellers = data.filter((seller) => seller.check === true);
        // console.log(showSellers)

        setSellers(showSellers);
      });
  }, [sellers]);

  // delete user
  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user?._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Buyer Deleted Successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold  mt-10">All Sellers</h2>

      <div className="overflow-x-auto w-5/6 mx-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-16 h-16">
                        <img src={user?.photoURL} alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.displayName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user?.email}
                  </span>
                </td>
                <td>{user?.check === true ? "Seller" : "Buyer"}</td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
