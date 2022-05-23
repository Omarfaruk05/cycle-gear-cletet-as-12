import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='my-16 px-4 lg:px-16 md:px-8 '>
            <h1 className='text-4xl font-medium text-primary text-center underline mb-12'>Our Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {products.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Products;