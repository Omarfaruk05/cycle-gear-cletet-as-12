import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if(googleLoading || emailLoading){
        return <Loading></Loading>
    }

    if(googleError || emailError){
        errorElement = <><p className='text-red-500 mb-1'><small>{googleError?.message || emailError?.message}</small></p></>
    }

    if(googleUser || emailUser){
        navigate(from, {replace: true});
    }

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
        reset()
    };

    const resetPassword = async(data) => {
        const email = data.email;

        if(email){
            await sendPasswordResetEmail(email);
            toast.success("Email Send")
        }
        else{
            toast.error("Please Enter Your Email")
        }
    }
    return (
        <div  className='pt-12 md:pt-24  bg-base-200'>
            <h2 className='text-center text-4xl text-secondary font-semibold'>Please Login</h2>
            <div  className='flex justify-center  h-[75vh] md:h-[80vh]'>
                <div>
                    <div class="card w-96">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" placeholder="Your Email" class="input input-bordered input-primary w-full max-w-xs"
                                {...register("email",{
                                    required: {
                                        value: true,
                                        message:'Email is Requited'
                                    },
                                    pattern: {
                                        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                                <label className="label">
                                    {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        
                                </label>
                                <input type="Password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" {...register("password",{
                                required: {
                                    value: true,
                                    message: 'Passowrd is Requirted'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                                })} />
                                <label className="label">
                                    {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                                {errorElement}
                                <input type={"submit"} value="Login"  class="btn btn-secondary font-bold w-full" />
                            </form>
                            <p><small>New to Doctors Portal ? <Link className='text-primary' to={"/register"}>Create New Account</Link></small></p>
                            <p><small>Forget Password? <Link onClick={handleSubmit(resetPassword)} className='text-primary' to="/login">Reset Password</Link></small> </p>
                            <div className="divider">OR</div>
                            <button onClick={() => signInWithGoogle()} className="btn bg-red-400 hover:bg-red-700 hover:text-white">Google Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;