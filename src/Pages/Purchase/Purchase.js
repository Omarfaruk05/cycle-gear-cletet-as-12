import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [errorElemnet, setErrorElemnet] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    let newQuantity;
    const {id} = useParams();
    const [user] = useAuthState(auth);
    const { handleSubmit, register, reset} = useForm();

    const { data: product, isLoading, refetch  } = useQuery('product', () =>fetch(`https://glacial-wave-27081.herokuapp.com/product/${id}`).then(res=>res.json())
   )

   if(isLoading){
       return <Loading></Loading>
   }
   
   const handleDisabled = () => {
       setButtonDisabled(false);

   }

   const onSubmit =(data) => {
       const name = data.name;
       const productName = product.productName;
       const email = data.email;
       const address = data.address;
       const phoneNumber = data.phone;
       const quantity = data.quantity;
       newQuantity = quantity
       const productPrice = product.price * quantity;
       if(product.minimumOrderQuantity > quantity || quantity > product.productQuantity){
          const error = <p> <small className='text-red-600'>You have to buy between  {product.minimumOrderQuantity}  to {product.productQuantity} products. </small></p>
          setErrorElemnet(error)
          setButtonDisabled(true)
       }
       else{
           setErrorElemnet('');
           setButtonDisabled(false);
           const purchasedProduct = {name, email, phoneNumber, address, productName, quantity, productPrice};

           fetch(`https://glacial-wave-27081.herokuapp.com/purchased`, {
               method: 'POST',
               headers: {
                'content-type': 'application/json'
               },
               body: JSON.stringify(purchasedProduct)
           })
           .then(res => res.json())
           .then(result => {
           });
            
           newQuantity = (product.productQuantity - quantity) ;

           fetch(`https://glacial-wave-27081.herokuapp.com/product/${id}`,{
               method:'PATCH',
               headers: {
                'content-type': 'application/json'
               },
               body: JSON.stringify({newQuantity})
           })
           .then(res => res.json())
           .then(data1 => {
                toast.success('Successfully Product Purchased');
                refetch();
                reset();
           })
       }
   }
    return (
        <div className='bg-base-300 xl:h-full'>
            <div className='md:flex m-4 lg:m-8'>
                <div data-aos="fade-right" data-aos-duration="1000" class="card lg:card-side bg-base-100 shadow-xl md:w-2/3 items-center justify-items-center m-4">
                    <div className='sm:w-1/3 p-4 flex justify-between items-center'>
                        <img className='rounded-xl' src={product.productImg} alt="product" />
                    </div>
                    <div class="card-body sm:w-2/3">
                        <h2 class="card-title text-4xl"> <span className='text-secondary'>Name:</span> {product.productName} <span><div class="badge badge-secondary">NEW</div></span></h2>
                        <hr/>
                        <h4 className='text-xl'><span className='font-semibold text-secondary'>Description: </span> <span>{product.productDetails}</span> </h4>
                        <hr />
                        <h3 className='text-2xl'> <span className='text-secondary font-semibold'>Price:</span> ${product.price}</h3>
                        <hr />
                        <h3 className='text-2xl'> <span className='text-secondary font-semibold'>Available:</span>{product.productQuantity} </h3>
                        <hr />
                        <h3 className='text-2xl'> <span className='text-secondary font-semibold'>Minimum Order:</span> {product.minimumOrderQuantity}</h3>
                        
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='md:w-1/3 ml-4 m-4'>
                    <div className='bg-white rounded-lg shadow-lg p-4'>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                            <input type="text" disabled name="name" {...register("name",{value:user?.displayName})} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />

                            <input type="email" disabled name="email" {...register("email", {value:user?.email})} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                            
                            <textarea class="textarea textarea-bordered w-full max-w-xs" {...register("address", {required: true})} placeholder="Address" name="address"></textarea>

                            <input type="number" name="phone" {...register("phone", {required: true})} placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                            <input type="number" onClick={handleDisabled} name="quantity" {...register("quantity", {required: true, value:product.minimumOrderQuantity})} placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                            {errorElemnet}
                            <input type="submit" disabled={buttonDisabled} value="Purchase" className="btn btn-primary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;