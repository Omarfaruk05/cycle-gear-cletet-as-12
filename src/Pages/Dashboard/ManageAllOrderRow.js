import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageAllOrderRow = ({ allOrder, index, refetch }) => {
  const { _id } = allOrder;

  const handleShipped = (id) => {
    fetch(`https://cycle-gear.onrender.com/allOrders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        toast.success("Shippment complete");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{allOrder.productName}</td>
      <td>{allOrder.email}</td>
      <td>
        {!allOrder.paid && (
          <p className="text-white p-1 text-sm bg-secondary rounded">UnPaid</p>
        )}
        {allOrder.paid && !allOrder.shipped && (
          <small className="text-secondary">
            <button
              onClick={() => handleShipped(_id)}
              className="btn btn-xs btn-primary"
            >
              Pending
            </button>
          </small>
        )}
        {allOrder.paid && allOrder.shipped && (
          <p className="text-white p-1 text-sm bg-green-700 rounded">Shipped</p>
        )}
      </td>
    </tr>
  );
};

export default ManageAllOrderRow;
