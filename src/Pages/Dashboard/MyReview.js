import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const { handleSubmit, register, reset} = useForm();

    const imageKey = "d93b2967fa5ed86d686b286dab147db4";

    const onSubmit = async(data) => {
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const review = {
                    name: user.displayName,
                    email: user.email,
                    comment: data.comment,
                    ratting: parseFloat(data.ratting),
                    photo: img
                }
                console.log(review)

                fetch('https://glacial-wave-27081.herokuapp.com/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Review Added');
                        reset()
                    }
                    else{
                        toast.error('Failed to Add Review')
                    }
                })
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-4xl text-secondary font-semibold'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                <input type="text" disabled name="name" {...register("name",{value:user?.displayName})} placeholder="Your Name" className="input input-bordered w-full max-w-md" />

                <input type="email" disabled name="email" {...register("email", {value:user?.email})} placeholder="Email Address" className="input input-bordered w-full max-w-md" />
                            
                <textarea class="textarea textarea-bordered w-full max-w-md" {...register("comment", {required: true})} placeholder="Comment" name="comment"></textarea>

                <select  {...register('ratting', {required: true})} class="select select-bordered w-full max-w-md">
                <option disabled selected>Add Review Star</option>
                    <option>1</option>
                    <option>3</option>
                    <option>4</option>
                    <option>2</option>
                    <option>5</option>
                </select>

                <input type="file" name="reviewImg" {...register("image", {required: true})} placeholder="Reviewer Photo" className="input input-bordered w-full max-w-md" />

                <input type="submit" value="Add Review" className="btn btn-primary w-full max-w-md" />
            </form>
        </div>
    );
};

export default MyReview;