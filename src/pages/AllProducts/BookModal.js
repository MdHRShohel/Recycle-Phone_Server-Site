import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookModal = ({ mobileData, setMobileData, advertised,setAdertised }) => {
  const { user } = useContext(AuthContext);
  //console.log(mobileData.resalePrice);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    const bookingInfo = {
      address: data.address,
      email: data.email,
      mobileName: data.mobileName,
      name: data.name,
      number: data.number,
      photo: mobileData.photo,
      price: mobileData.resalePrice,
    };
    //console.log(userInfo);
    fetch("https://recycle-phone-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your booking successfully Created!");
        } else {
          toast.error(data.message);
        }
        setMobileData(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            onClick={() => setMobileData(null)}
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-10">
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={user?.displayName}
                className="input italic input-bordered w-full "
                {...register("name", { required: true })}
              />
            </div>

            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">E-mail</span>
              </label>
              <input
                type="email"
                readOnly
                defaultValue={user?.email}
                className="input italic input-bordered w-full "
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Mobile Name</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={mobileData?.name}
                className="input italic input-bordered w-full"
                {...register("mobileName", { required: true })}
              />
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Mobile Price (tk)</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={mobileData?.resalePrice}
                className="input italic input-bordered w-full"
                {...register("mobilePrice", { required: true })}
              />
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Phone Number</span>
              </label>
              <input
                type="text"
                className="input italic input-bordered w-full"
                {...register("number", { required: true })}
              />
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Address</span>
              </label>
              <input
                type="text"
                className="input italic input-bordered w-full"
                {...register("address", { required: true })}
              />
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="btn btn-primary w-full my-5 text-white max-w-xl"
              type="submit"
              value="Book"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
