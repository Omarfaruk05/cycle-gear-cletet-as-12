import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const {data: products, isLoading, refetch} = useQuery('allProducts', () => fetch('http://localhost:5000/manageProduct').then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-secondary text-center font-semibold'>Manage Products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="sm:table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =><ProductRow key={product._id} product={product} refetch={refetch} setDeletingProduct={setDeletingProduct}></ProductRow>)
                        }
                    
                    </tbody>
                </table>
            </div>
            {
              deletingProduct && <DeleteConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeleteConfirmModal>  
            }
        </div>
    );
};

export default ManageProducts;