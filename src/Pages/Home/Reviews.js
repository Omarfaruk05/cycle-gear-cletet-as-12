import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div  className='my-16 px-4 lg:px-16 md:px-8 '>
            <h1 className='text-4xl font-medium text-primary text-center underline mb-12'>Clients Review</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mx-16'>
                {reviews.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;