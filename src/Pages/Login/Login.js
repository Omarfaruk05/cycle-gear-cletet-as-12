import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit} = useForm();

  const onSubmit = data => {
      console.log(data);
    }
    return (
        <div>
            <h2 className='text-center text-4xl text-secondary font-semibold'>Please Login</h2>
            <div>
                <div class="card w-96">
                    <div class="card-body">
                        <form onclick={handleSubmit(onSubmit)}>
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
                        <p><small>New to Doctors Portal ? <Link className='text-primary' to={"/register"}>Create New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;