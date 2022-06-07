import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CencelConfirmModal from './CencelConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [cencelingProduct, setCencelingProduct] = useState(null)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const {data: myOrders, isLoading, refetch} = useQuery('myOrders', () => fetch(`https://glacial-wave-27081.herokuapp.com/purchased?email=${user.email}`,
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
        <div data-aos="zoom-in" data-aos-duration="1000">
            <h1 className='text-center text-3xl text-secondary font-semibold'>My Orders</h1>
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
                            myOrders.map((myOrder, index) => <OrderRow key={myOrder._id} myOrder={myOrder} index={index} refetch={refetch} setCencelingProduct={setCencelingProduct}></OrderRow>)
                        }
                    
                    </tbody>
                </table>
            </div>
            {
              cencelingProduct && <CencelConfirmModal cencelingProduct={cencelingProduct} refetch={refetch} setCencelingProduct={setCencelingProduct}></CencelConfirmModal>  
            }
        </div>
    );
};

export default MyOrders;