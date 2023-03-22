import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L12UiHFIwWC2zHBjIcdLiM7GaRQ1kH49MNeTR7AbrUbE4Us0cCN6iPUFUI4ZEFbqge2PmfljKxbcapmBWyzqspd00y4A66Q5F"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://cycle-gear.onrender.com/booking/${id}`;

  const { data: payProduct, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-auto">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <h1 className="text-success text-2xl font-semibold">
            Your Product Name:{" "}
            <span className="text-secondary font-bold">
              {payProduct.productName}
            </span>
          </h1>
          <h2 class="card-title">
            Please Pay{" "}
            <span className="text-secondary"> ${payProduct.productPrice}</span>{" "}
            for <span className="text-secondary">{payProduct.quantity}</span>
            Pice{" "}
          </h2>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm payProduct={payProduct}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
