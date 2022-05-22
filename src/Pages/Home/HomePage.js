import React from 'react';
import Discover from './Discover';
import Landing from './Landing';
import Products from './Products';
import Reviews from './Reviews';

const HomePage = () => {
    return (
        <div className=' bg-base-200'>
            <Landing></Landing>
            <Products></Products>
            <Reviews></Reviews>
            <Discover></Discover>
        </div>
    );
};

export default HomePage;