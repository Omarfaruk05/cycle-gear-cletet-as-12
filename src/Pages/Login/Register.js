import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const navigate = useNavigate();
    let errorElement;

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(emailLoading || updating){
        return <Loading></Loading>
    }

    if(emailError || updateError){
        errorElement = <p className='text-red-500 mb-1'><small>{emailError?.message || updateError?.message}</small></p>
    }

    if(emailUser){
        navigate('/home');
    }


      const onSubmit = async(data) => {
          const name = data.name;
          const email = data.email;
          const password = data.password;
          await createUserWithEmailAndPassword(email, password);
          await updateProfile ({displayName: name})
          reset();
      } 
    return (
        <div className='bg-base-200'>
            <div className='mt-12 md:mt-24'>
                <h2 className='text-center text-4xl text-secondary font-semibold'>Please Register</h2>
                <div className='flex justify-center h-[75vh] md:h-[80vh]'>
                    <div class="card w-96">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="name" placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs"
                                {...register("name",{
                                    required: {
                                        value: true,
                                        message:'Name is Requited'
                                    }
                                })} />
                                <label className="label">
                                    {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
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
                                <input type="password" placeholder="Your Password" class="input input-bordered input-primary w-full max-w-xs"
                                {...register("password",{
                                    required: {
                                        value: true,
                                        message:'Email is Requited'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })} />
                                <label className="label">
                                    {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                                {errorElement}
                                <input type={"submit"} value="Register"  class="btn btn-secondary font-bold w-full" />
                            </form>
                            <p><small>Already have an account ? <Link className='text-primary' to={"/login"}>Please Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;