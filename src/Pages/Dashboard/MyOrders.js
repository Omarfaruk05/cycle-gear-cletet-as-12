import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const {data: myOrders, isLoading, refetch} = useQuery('myOrders', () => fetch(`http://localhost:5000/purchased?email=${user.email}`,
    {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
        if(res.status === 401 || res.status === 403) {
            navigate("/home")
            signOut(auth);
            localStorage.removeItem('accessToken');
        }
        return res.json()
    })
    
    );
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>my ordersdddd: {myOrders.length}</h1>
            <div class="overflow-x-auto">
                <table class="sm:table table-zebra w-full">
                    <thead className='text-center'>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Pay</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            myOrders.map((myOrder, index) => <OrderRow key={myOrder._id} myOrder={myOrder} index={index} refetch={refetch}></OrderRow>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;