import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({children}) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        navigate('/login')
    }
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
            <div class="drawer-content flex flex-col ">
                <div class="w-full navbar bg-slate-400 py-4 px-0 md:px-8 lg:px-16 ">
                    <div class="flex-1 text-3xl text-secondary font-semibold font-serif px-2 mx-2"><Link to="/">Cycle Gear</Link></div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                        <li><NavLink className='rounded-lg mx-2 text-white font-medium text-xl' to={"/home"}>Home</NavLink></li>
                        <li><NavLink className='rounded-lg mx-2 text-white font-medium text-xl' to={"/blogs"}>Blogs</NavLink></li>
                        <li><NavLink className='rounded-lg mx-2 text-white font-medium text-xl' to={"/about"}>About</NavLink></li>
                        <li><NavLink className='rounded-lg mx-2 text-white font-medium text-xl' to={"/dashboard"}>Dashboard</NavLink></li>
                        <li>{user? <button className='rounded-lg mx-2 text-white font-medium text-xl' onClick={logout}>SingOut</button> : <NavLink className='rounded-lg mx-2 text-white font-medium text-xl' to="/login">Login</NavLink>}</li>

                        </ul>
                    </div>
                </div>
                {children}
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100">
                <li><NavLink className='rounded-lg mx-2' to={"/home"}>Home</NavLink></li>
                        <li><NavLink className='rounded-lg mx-2 font-medium' to={"/blogs"}>Blogs</NavLink></li>
                        <li><NavLink className='rounded-lg mx-2 font-medium' to={"/about"}>About</NavLink></li>
                        <li><NavLink className='rounded-lg mx-2 font-medium' to={"/dashboard"}>Dashboard</NavLink></li>
                        <li>{user? <button className='rounded-lg mx-2 font-medium text-black ' onClick={logout}>SingOut</button> : <NavLink className='rounded-lg mx-2 font-medium' to="/login">Login</NavLink>}</li>

                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;