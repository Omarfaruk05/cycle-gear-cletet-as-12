import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { handleSubmit, register, reset } = useForm();

  const imageKey = "d93b2967fa5ed86d686b286dab147db4";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            minimumOrderQuantity: data.minimumOrderQuantity,
            productName: data.productName,
            productImg: img,
            productDetails: data.productDetails,
            productQuantity: data.productQuantity,
            price: data.price,
          };

          fetch("https://cycle-gear.onrender.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product Added");
                reset();
              } else {
                toast.error("Failed to Add Product");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-4xl text-secondary font-semibold">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
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

        <input
          type="text"
          name="productName"
          {...register("productName", { required: true })}
          placeholder="Product Name"
          className="input input-bordered w-full max-w-md"
        />

        <textarea
          class="textarea textarea-bordered w-full max-w-md"
          {...register("productDetails", { required: true })}
          placeholder="Product Details"
          name="productDetails"
        ></textarea>

        <input
          type="number"
          name="price"
          {...register("price", { required: true })}
          placeholder="Product Price"
          className="input input-bordered w-full max-w-md"
        />

        <input
          type="number"
          name="productQuantity"
          {...register("productQuantity", { required: true })}
          placeholder="Product Quantity"
          className="input input-bordered w-full max-w-md"
        />

        <input
          type="number"
          name="minimumOrderQuantity"
          {...register("minimumOrderQuantity", { required: true })}
          placeholder="Minimum Order Quantity"
          className="input input-bordered w-full max-w-md"
        />

        <input
          type="file"
          name="productImg"
          {...register("image", { required: true })}
          placeholder="Product Photo"
          className="input input-bordered w-full max-w-md"
        />

        <input
          type="submit"
          value="Purchase"
          className="btn btn-primary w-full max-w-md"
        />
      </form>
    </div>
  );
};

export default AddProduct;
