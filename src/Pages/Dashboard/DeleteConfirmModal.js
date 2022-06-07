import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingProduct, refetch, setDeletingProduct}) => {
    const {_id, productName} =  deletingProduct;

    const handleDelete = () => {
        fetch(`https://glacial-wave-27081.herokuapp.com/manageProduct/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success('Successfully Deleted'); 
                refetch();
                setDeletingProduct(null);
            }
            else{
                toast.error('Failed to Delete')
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-400">Are you sure you want to delete {productName}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={()=>handleDelete()} class="btn btn-sm bg-red-500 text-white">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-sm">Cencel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;