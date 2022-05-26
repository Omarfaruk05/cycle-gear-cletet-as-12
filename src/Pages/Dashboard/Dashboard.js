import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className=' bg-base-300'>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col m-4 lg:mr-16">
                        <h1 className='text-4xl text-primary text-center font-bold mb-4'>Dashboard</h1>
                        <hr />
                        <Outlet></Outlet>
                    </div> 
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                        <ul class="menu p-4 overflow-y-auto w-48 lg:w-72 bg-base-100 text-base-content">
                            <li><Link className='mb-2' to={"/dashboard"}>My Profile</Link></li>
                            {
                                (!admin) && <>
                                    <li><NavLink className='mb-2' to={"/dashboard/orders"}>My Orders</NavLink></li>
                                    <li><NavLink className='mb-2' to={"/dashboard/review"}>Add Review</NavLink></li>
                                </>
                            }
                            { admin && <>
                                <li><NavLink className='mb-2' to={"/dashboard/users"}>All Users</NavLink></li>
                                <li><NavLink className='mb-2' to={"/dashboard/addProduct"}>Add Product</NavLink></li>
                                <li><NavLink className='mb-2' to={"/dashboard/manageProducts"}>Manage Products</NavLink></li>
                                <li><NavLink className='mb-2' to={"/dashboard/manageAllOrders"}>Manage All Orders</NavLink></li>

                            </>}
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;