import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Loading from "../../../../../components/Shared/Loading/Loading";
import { AuthContext } from "../../../../../Context/AuthProvider";

const AddAProduct = () => {
  const categories = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpinner(true);
    const form = event.target;
    const name = form.name.value;
    const location = form.location.value;
    const used = form.used.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const category = form.category.value;
    const image = form.image.files[0];
    const sellerName = form.sellerName.value;

    // console.log(product);

    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=c993754e5e7bdf8ca9412defbbd79642";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const product = {
            sellerName,
            category,
            originalPrice,
            resalePrice,
            location,
            used,
            photo: imageData.data.url,
            name,
            email: user?.email,
          };
          //console.log(userInfo);
          // save doctor information to the database

          fetch("http://localhost:5000/add-a-product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success("Your Product Has Added Successfully");
                navigate("/dashboard/my-products");
              }
              //console.log(result)
            });
        }
        setSpinner(false);
      });
  };

  if (spinner) {
    //console.log(spinner);
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center"
        >
          <div className="bg-white shadow-lg rounded  md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Add Your Product
            </p>

            <div className="mt-6 w-full">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Product Name{" "}
              </label>
              <input
                name="name"
                id="name"
                aria-labelledby="name"
                type="text"
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "
                placeholder="e.g: I Phone 14 pro Max xx "
                required
              />
            </div>
            <div className="mt-6 w-full">
              <label
                htmlFor="image"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Select Image{" "}
              </label>
              <br />
              <input
                className="mt-2 mb-5"
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Select Brand{" "}
              </label>
              <select
                name="category"
                id="category"
                className="select select-success w-full my-2"
                required
              >
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="location"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Location{" "}
              </label>
              <input
                name="location"
                id="location"
                aria-labelledby="location"
                type="text"
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "
                placeholder="e.g: Dhaka, Bangladesh "
                required
              />
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="used"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                How many years/months You Used?{" "}
              </label>
              <input
                name="used"
                id="used"
                aria-labelledby="used"
                type="text"
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "
                placeholder="e.g: 1 year / 6 months "
                required
              />
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="originalPrice"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Original Price{" "}
              </label>
              <input
                name="originalPrice"
                id="originalPrice"
                aria-labelledby="originalPrice"
                type="text"
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "
                placeholder="e.g: 12,000 "
                required
              />
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="resalePrice"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Sale Price{" "}
              </label>
              <input
                name="resalePrice"
                id="resalePrice"
                aria-labelledby="resalePrice"
                type="text"
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "
                placeholder="e.g: 12,000 "
                required
              />
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="sellerName"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Your Name{" "}
              </label>
              <input
                name="sellerName"
                disabled
                defaultValue={user?.displayName}
                id="sellerName"
                aria-labelledby="sellerName"
                type="text"
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "
                placeholder="e.g: Md Shijan Ali "
                required
              />
            </div>

            <input
              className="w-full btn btn-primary mt-10"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
