import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


      const onSubmit = async(data) => {
          const name = data.name;
          const email = data.email;
          const passowrd = data.passowrd;
          await createUserWithEmailAndPassword(email, passowrd);
          await updateProfile({displayName: name});
      } 
    return (
        <div>
            <div>
                <h2 className='text-center text-4xl text-secondary font-semibold'>Please Login</h2>
                <div>
                    <div class="card w-96">
                        <div class="card-body">
                            <form onclick={handleSubmit(onSubmit)}>
                                <input type="name" placeholder="Your Passowrd" class="input input-bordered input-primary w-full max-w-xs"
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
                                <input type="password" placeholder="Your Passowrd" class="input input-bordered input-primary w-full max-w-xs"
                                {...register("passowrd",{
                                    required: {
                                        value: true,
                                        message:'Email is Requited'
                                    },
                                    pattern: {
                                        value:6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })} />
                                <label className="label">
                                    {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        
                                </label>
                                <input type={"submit"} value="Login"  class="btn btn-secondary font-bold w-full" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;