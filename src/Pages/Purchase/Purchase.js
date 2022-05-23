import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const {id} = useParams();

    const { data: product, isLoading, refetch  } = useQuery('product', () =>fetch(`http://localhost:5000/product/${id}`).then(res=>res.json())
   )

   if(isLoading){
       return <Loading></Loading>
   }
    return (
        <div className='bg-base-300 min-h-full xl:h-full'>
            <div className='mx-4 md:mx-16 lg:mx-24 xl:mx-48 my-4 md:my-8 lg:my-16'>
                <div class="card lg:card-side bg-base-100 shadow-xl w-full items-center justify-items-center">
                <div className='sm:w-1/3 p-4 flex justify-center items-center'>
                    <img className='rounded-xl' src={product.productImg} alt="product" />
                </div>
                <div class="card-body sm:w-2/3">
                    <h2 class="card-title text-4xl"> <span className='text-secondary'>Name:</span> {product.productName} <span><div class="badge badge-secondary">NEW</div></span></h2>
                    <hr/>
                    <h4 className='text-xl'><span className='font-semibold text-secondary'>Description: </span> <span>{product.productDetails}</span> </h4>
                    <hr />
                    <h3 className='text-2xl'> <span className='text-secondary font-semibold'>Price:</span> ${product.price}</h3>
                    <hr />
                    <h3 className='text-2xl'> <span className='text-secondary font-semibold'>Available:</span> {product.productQuantity}</h3>
                    <hr />
                    <h3 className='text-2xl'> <span className='text-secondary font-semibold'>Price:</span> ${product.price}</h3>
                    <div class="card-actions justify-center">
                    <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;