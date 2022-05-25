import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col m-4 lg:mr-16">
                        <h1 className='text-4xl text-primary text-center font-bold'>Dashboard</h1>
                        <Outlet></Outlet>
                    </div> 
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                        <ul class="menu p-4 overflow-y-auto w-48 lg:w-72 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='mb-2' to={"/dashboard"}>My Orders</Link></li>
                        <li><Link className='mb-2' to={"/dashboard/review"}>My Review</Link></li>
                        { admin && <>
                            <li><Link className='mb-2' to={"/dashboard/users"}>All Users</Link></li>
                            <li><Link className='mb-2' to={"/dashboard/addProduct"}>Add Product</Link></li>

                        </>}
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;