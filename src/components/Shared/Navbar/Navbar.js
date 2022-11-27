import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
   const menuItems = (
     <>
       <li>
         <Link to="/" className="text-xl">
           Home
         </Link>
       </li>
       <li>
         <Link to="/dashboard" className="text-xl">
           Dashboard
         </Link>
       </li>
       <li>
         <Link to="/blogs" className="text-xl">
           Blogs
         </Link>
       </li>
     </>
   );

    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
     logout().then(() => {
       toast.success("User Logged Out");
     });
    } 

    return (
      <div className="navbar">
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
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {!user?.uid ? (
            <>
              <Link to="/login" className="btn btn-primary btn-md mx-2">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="btn btn-outline btn-primary btn-md mx-2"
              >
                Sign up
              </Link>
            </>
          ):(
            <h2
              onClick={handleLogOut}
              className="btn btn-outline btn-md mx-2 cursor-pointer"
            >
              Sign Out
            </h2>
          ) }
        </div>
      </div>
    );
};

export default Navbar;