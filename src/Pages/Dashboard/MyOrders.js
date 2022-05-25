import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect( () => {
       if(user){
        fetch( `http://localhost:5000/purchased?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            console.log(res)
            if(res.status === 401 || res.status === 403) {
                navigate("/home")
                signOut(auth);
                localStorage.removeItem('accessToken');
            }
            return res.json()
        })
        .then(data => {
            
            setMyOrders(data)
        })   
       }
    }, [user])

    return (
        <div>
            <h1>my ordersdddd: {myOrders.length}</h1>
            <div class="overflow-x-auto">
                <table class="sm:table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{myOrder.name}</td>
                                <td>{myOrder.productName}</td>
                                <td>{myOrder.quantity}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;