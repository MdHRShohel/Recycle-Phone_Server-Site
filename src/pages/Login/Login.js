import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { signInWithGoogle, login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);
    login(email, password)
      .then((result) => {
        //const user = result.user;
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error : ", error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        if (result.user.uid) {
          toast.success("Login Successful");
        }
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero md:py-20">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold my-4">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
              />
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  Don't Have an Account? <strong>Sign Up</strong>
                </Link>
              </label>
            </div>
            <p
              className="mb-2 
          text-orange-500 text-center text-sm font-semibold
          dark:border-gray-400"
            >
              {error}
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <h5 className="text-center text-lg font-semibold mt-4">OR</h5>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn flex items-center justify-center w-full py-2 mt-4 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className="hidden mx-2 sm:inline">Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
