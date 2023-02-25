import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-xl">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="text-xl">
          Blogs
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logout().then(() => {
      toast.success("User Logged Out");
    });
  };

  return (
    <div className="bg-blue-500 text-white font-semibold">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {user?.uid ? (
                <li>
                  <Link to="/dashboard" className="text-xl">
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost upper-case text-lg md:text-2xl font-semibold"
          >
            Recycle Phone
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}

            <li>
              <Link to="/dashboard" className="text-xl">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-white font-semibold">
          {!user?.uid ? (
            <>
              <Link to="/login" className="btn btn-accent btn-md mx-2">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="hidden btn btn-error btn-md mx-2 md:block lg:block py-4"
              >
                Sign up
              </Link>
            </>
          ) : (
            <h2
              onClick={handleLogOut}
              className="btn btn-warning btn-md mx-2 cursor-pointer"
            >
              Sign Out
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
