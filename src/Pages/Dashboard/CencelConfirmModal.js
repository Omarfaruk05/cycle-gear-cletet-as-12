import React from 'react';
import { toast } from 'react-toastify';

const CencelConfirmModal = ({cencelingProduct, setCencelingProduct, refetch}) => {

    const {_id, productName} =  cencelingProduct;

    const handleCencel = () => {
        fetch(`http://localhost:5000/purchased/${_id}`, {
          method: 'DELETE',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                toast.success('Successfully Cenceled'); 
                refetch();
                setCencelingProduct(null);
            }
            else{
                toast.error('Failed to Cenceled')
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="cencel-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-400">Are you sure you want to delete {productName}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={()=>handleCencel()} class="btn btn-sm bg-red-500 text-white">Remove</button>
                        <label for="cencel-confirm-modal" class="btn btn-sm">Cencel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CencelConfirmModal;