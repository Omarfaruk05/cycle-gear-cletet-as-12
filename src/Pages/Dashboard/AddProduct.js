import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { handleSubmit, register, reset} = useForm();

    const onSubmit = (data) => {

        reset();
    }
    return (
        <div>
            <h2 className='text-center text-4xl text-secondary font-semibold'>Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                <input type="text" disabled name="name" {...register("name",{value:user?.displayName})} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />

                <input type="email" disabled name="email" {...register("email", {value:user?.email})} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />

                <input type="text" name="productName" {...register("productName", {required: true})} placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                            
                <textarea class="textarea textarea-bordered w-full max-w-xs" {...register("productDetails", {required: true})} placeholder="Product Details" name="productDetails"></textarea>

                <input type="number" name="productQuantity" {...register("productQuantity", {required: true})} placeholder="Product Quantity" className="input input-bordered w-full max-w-xs" />

                <input type="number"  name="minimumOrderQuantity" {...register("minimumOrderQuantity", {required: true})} placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs" />

                <input type="file" name="productImg" {...register("productImg", {required: true})} placeholder="Product Photo" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Purchase" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProduct;