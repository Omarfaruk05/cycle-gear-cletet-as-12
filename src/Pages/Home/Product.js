import React from 'react';

const Product = ({product}) => {
    const {productName, productQuantity, productImg, price} = product;
    return (
        <div class="card max-w-lg bg-base-100 shadow hover:shadow-2xl">
           <div className='p-2'>
           <img className='h-72 md:h-60 lg:h-96 rounded-md' src={productImg} alt="Shoes" />
           </div>
            <div class="card-body">
                <h2 class="card-title text-2xl flex justify-center">{productName}
                </h2>
                <h3 className='text-md font-semibold text-center'>Quantity: <span className='text-secondary'>{productQuantity}</span></h3>
                <p className='text-center font-semibold'>Price: $<span className='text-secondary'>{price}</span></p>
                <button className='btn btn-outline btn-primary'>Purchase</button>
                
            </div>
        </div>
    );
};

export default Product;