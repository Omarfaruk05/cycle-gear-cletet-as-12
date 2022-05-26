import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderRow = ({myOrder, index, refetch}) => {

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/purchased/${id}`, {
          method: 'DELETE',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                toast.success('Successfully Deleted'); 
                refetch();
            }
            else{
                toast.error('Failed to Delete')
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{myOrder.productName}</td>
            <td>{myOrder.quantity}</td>
            <td>{myOrder.productPrice}</td>
            <td>
                {
                    (myOrder.productPrice  && !myOrder.paid)&& <Link to={`/dashboard/payment/${myOrder._id}`}><button class="btn btn-xs bg-primary text-white">Pay</button></Link>
                }
                {
                    (myOrder.productPrice  && myOrder.paid)&& <span class="btn btn-xs bg-success text-white">Paid</span>
                }
            </td>
            <td>
                {
                    (!myOrder.paid) && <button onClick={()=>handleDelete(myOrder._id)} class="btn btn-xs bg-red-500 text-white">Cencel Order</button>
                }
                {
                    (myOrder.paid) && <button disabled onClick={()=>handleDelete(myOrder._id)} class="btn btn-xs bg-red-500 text-white">Cencel Order</button>
                }
            </td>
        </tr>
    );
};

export default OrderRow;