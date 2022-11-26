import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders = [] } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/my-orders/${user?.email}`
        );
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold mt-10">My Orders</h2>

      {myOrders.length === 0 ? (
        <h2 className="text-3xl font-semibold mt-10 text-center">
          You Have not any Orders
        </h2>
      ) : (
        <div className="overflow-x-auto w-full my-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Avater</th>
                <th>Seller Name / Location</th>
                <th>Products Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr key={order._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{order.salerName}</div>
                      <div className="text-sm opacity-50">{order.location}</div>
                    </div>
                  </td>
                  <td>
                    {order.productName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Condition: {order?.used} used
                    </span>
                  </td>
                  <td>{order.price} BDT</td>
                  <th>
                    <button className="btn bg-green-800 btn-sm">Pay</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
