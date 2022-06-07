import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {

    const {data: reviews, isLoading} = useQuery('reviews', () => fetch('https://glacial-wave-27081.herokuapp.com/review').then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div  className='my-16 px-4 lg:px-16 md:px-8 '>
            <h1 className='text-4xl font-medium text-primary text-center underline mb-12'>Clients Review</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mx-16'>
                {reviews.map(review => <Review key={review._id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;