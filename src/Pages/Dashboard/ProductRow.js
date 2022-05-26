import React from 'react';

const ProductRow = ({product, refetch, setDeletingProduct}) => {
    const { productImg, productName, productQuantity, price} = product;

   
    return (
        <tr>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={productImg} alt="Avatar" />
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>{productQuantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs bg-red-500 text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;