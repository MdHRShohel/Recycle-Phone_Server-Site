import React, { useContext } from "react";
//import toast from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import { AuthContext } from "../Context/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // const [isAdmin] = UseAdmin(user?.email);
  // const [isSeller] = UseSeller(user?.email);
  // const [isBuyer] = UseBuyer(user?.email);
  //console.log(isAdmin);
  //const navigate = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* {" "}
          bg-[#F2F2F2] */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <div className="avatar items-center justify-center mt-10">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="user" />
            </div>
          </div>

          <div className="mx-auto">
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <h4 className="font-semibold">{user?.email}</h4>
          </div>

          <div className="divider"></div>

          <ul className="menu p-4 w-72 lg:mb-72 text-base-content gap-2">
            {  (
              <>
                <li>
                  <NavLink to="/dashboard/all-user">All Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-sellers">All Sellers</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-buyers">All Buyers</NavLink>
                </li>
              </>
            )}
            { (
              <>
                <li>
                  <NavLink to="/dashboard/my-orders">My Orders</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/my-wishlist">My Wishlist</NavLink>
                </li> */}
              </>
            )}
            { (
              <>
                <li>
                  <NavLink to="/dashboard/my-products">My Products</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-a-product">Add Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-buyers">My Buyers</NavLink>
                </li>
              </>
            )}
          </ul>

          <NavLink className="mx-auto w-5/6">
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
