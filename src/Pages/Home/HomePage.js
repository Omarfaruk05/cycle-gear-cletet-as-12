import React from 'react';
import BusinessSummary from './BusinessSummary';
import Discover from './Discover';
import Landing from './Landing';
import Location from './Location';
import Products from './Products';
import Reviews from './Reviews';

const HomePage = () => {
    return (
        <div className=' bg-base-200'>
            <Landing></Landing>
            <Products></Products>
            <Reviews></Reviews>
            <Discover></Discover>
            <BusinessSummary></BusinessSummary>
            <Location></Location>
        </div>
    );
};

export default HomePage;