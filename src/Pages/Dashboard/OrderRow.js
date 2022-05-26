import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderRow = ({myOrder, index, refetch, setCencelingProduct}) => {

   
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
                    (myOrder.productPrice  && myOrder.paid)&& <small class=" px-2 py-1 rounded-lg bg-success text-white">Paid</small>
                }
            </td>
            <td>
                {
                    (!myOrder.paid) && <label onClick={() => setCencelingProduct(myOrder)} for="cencel-confirm-modal" class="btn btn-xs bg-red-500 text-white">Cencel</label>
                }
                {
                    (myOrder.paid) && <small className='text-secondary'>{myOrder.transectionId}</small>
                }
            </td>
        </tr>
    );
};

export default OrderRow;