import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import AllProducts from '../pages/AllProducts/AllProducts';
import Blogs from '../pages/Blogs/Blogs';
import AllBuyers from '../pages/Dashboard/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../pages/Dashboard/Dashboard/AllSellers/AllSellers';
import MyOrders from '../pages/Dashboard/Dashboard/Buyer/MyOrders/MyOrders';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard/Dashboard';
import AddAProduct from '../pages/Dashboard/Dashboard/Saller/AddAProduct/AddAProduct';
import MyBuyers from '../pages/Dashboard/Dashboard/Saller/MyBuyers/MyBuyers';
import MyProducts from '../pages/Dashboard/Dashboard/Saller/MyProducts/MyProducts';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products/:category",
        element: (
          
            <AllProducts />
          
        ),
        loader: ({ params }) =>
          fetch(`https://recycle-phone-server.vercel.app/products/${params.category}`),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      
        <DashboardLayout></DashboardLayout>
     
    ),
    children: [
      {
        path: "/dashboard/all-user",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/add-a-product",
        element: <AddAProduct></AddAProduct>,
        loader: () => fetch("https://recycle-phone-server.vercel.app/categories"),
      },
      {
        path: "/dashboard/my-buyers",
        element: <MyBuyers></MyBuyers>,
      },
    ],
  },
]);