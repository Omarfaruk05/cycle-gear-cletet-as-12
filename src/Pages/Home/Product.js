import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();

    const {_id, productName,productQuantity, productImg, price} = product;

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card max-w-lg bg-base-100 shadow hover:shadow-2xl">
           <div className='p-2 flex justify-center items-center'>
            <img className='h-72 md:h-60 lg:h-60 rounded-md' src={productImg} alt="cycle parts" />
           </div>
            <div class="card-body">
                <h2 class="card-title text-2xl flex justify-center">{productName}
                </h2>
                <h3 className='text-md font-semibold text-center'>Quantity: <span className='text-secondary'>{productQuantity}</span></h3>
                <p className='text-center font-semibold'>Price: $<span className='text-secondary'>{price}</span></p>
                <button onClick={() => navigateToPurchase(_id)} className='btn btn-outline btn-primary'>Buy Now</button>
                
            </div>
        </div>
    );
};

export default Product;