import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { handleSubmit, register, reset } = useForm();

  const {
    data: currentUser,
    isLoading,
    refetch,
  } = useQuery("currentUser", () =>
    fetch(`https://cycle-gear.onrender.com/user/${user.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(currentUser);
  const onSubmit = (data) => {
    const name = user.displayName;
    const email = user.email;
    const address = data.address;
    const phoneNumber = data.phone;
    const socialLink = data.socialLink;

    const updateUser = { name, address, phoneNumber, socialLink };

    fetch(`https://cycle-gear.onrender.com/user/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data1) => {
        toast.success("Update Successfull");
        refetch();
        reset();
      });
  };
  console.log(currentUser);
  return (
    <div className="bg-base-300 px-4 pt-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full mx-auto"
        >
          <h1 className="text-primary text-center text-3xl font-bold ">
            Profile Info{" "}
          </h1>
          <h3 className="text-xl font-semibold ">
            Your Name:{" "}
            <span className="text-secondary">{user.displayName}</span>
          </h3>
          <h3 className="text-xl font-semibold ">
            Your Email:{" "}
            <span className="text-secondary">{currentUser.email}</span>
          </h3>
          <h3 className="text-xl font-semibold ">
            Your Address:{" "}
            <span className="text-secondary">{currentUser.address}</span>
          </h3>
          <h3 className="text-xl font-semibold ">
            Your Phone Number:{" "}
            <span className="text-secondary">{currentUser.phoneNumber}</span>
          </h3>
          <h3 className="text-xl font-semibold ">
            Your Social Link:{" "}
            <span className="text-secondary text-sm">
              {currentUser.socialLink}
            </span>
          </h3>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="bg-white rounded-lg shadow-lg p-4 w-full max-w-full mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <label className="text-xl font-semibold text-secondary" htmlFor="">
              Update Profile
            </label>

            <input
              type="text"
              disabled
              name="name"
              {...register("name", { value: user?.displayName })}
              placeholder="Your Name"
              className="input input-bordered w-full max-w-md"
            />

            <input
              type="email"
              disabled
              name="email"
              {...register("email", { value: user?.email })}
              placeholder="Email Address"
              className="input input-bordered w-full max-w-md"
            />

            <textarea
              class="textarea textarea-bordered w-full max-w-md"
              {...register("address", { required: true })}
              placeholder="Address"
              name="address"
            ></textarea>

            <input
              type="number"
              name="phone"
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-md"
            />

            <input
              type="text"
              name="socialLink"
              {...register("socialLink", { required: true })}
              placeholder="Social Link"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="submit"
              value="Update"
              className="btn btn-primary w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
