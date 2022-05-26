import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrders = () => {

    const {data: allOrders, isLoading, refetch} = useQuery('allOrders', () => fetch(`http://localhost:5000/allOrders`,
    {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    
    );
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-center text-secondary text-3xl font-semibold'>Manage All Orders</h3>
            <div class="overflow-x-auto">
                <table class="sm:table table-zebra w-full">
                    <thead className='text-center'>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Buyer</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            allOrders.map((allOrder, index) => <ManageAllOrderRow key={allOrder._id} allOrder={allOrder} index={index} refetch={refetch} ></ManageAllOrderRow>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;