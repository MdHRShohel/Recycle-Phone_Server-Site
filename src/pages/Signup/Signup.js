import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const {createUser, updateUserProfile, setLoading} = useContext(AuthContext);
    
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;

      const password = form.password.value;
      const image = form.image.files[0];

      const formData = new FormData();
      formData.append("image", image);

      const url =
        "https://api.imgbb.com/1/upload?key=07b2aef909f6dcfc2a1b777f9afa7bd6";
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          createUser(email, password)
            .then((result) => {
              //setAuthToken(result.user);
              setError("");
              updateUserProfile(name, imageData.data.url)
                .then(() => {
                  form.reset();
                  navigate(from, { replace: true });
                })
                .catch((error) => setError(error.message));
            })
            .catch((error) => {
              console.error("create user account error", error);
              setError(error.message);
             setLoading(false);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });

      console.log(name, email, image, password);
    };
  return (
    <div className=" hero md:py-12">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold my-4">Sign up!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Image</span>
              </label>
              <input type="file" name="image" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="form-control">
                
              </div>
              <div className="my-6 form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg font-semibold">I want to be a Seller</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>

              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already Have an Account? <strong>Log In</strong>
                </Link>
              </label>
            </div>
            <p className="text-sm text-red-400 font-medium">{error}</p>
            <div className="form-control ">
              <button className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
