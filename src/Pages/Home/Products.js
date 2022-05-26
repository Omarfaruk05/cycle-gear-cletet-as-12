import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const {data: products, isLoading} = useQuery('products', () => fetch('http://localhost:5000/manageProduct').then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='my-16 px-4 lg:px-16 md:px-8 '>
            <h1 className='text-4xl font-medium text-primary text-center underline mb-12'>Our Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-16'>
                {products.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Products;