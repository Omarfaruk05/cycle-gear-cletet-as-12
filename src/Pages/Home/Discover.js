import React from 'react';
import DiscoverPhoto from '../../images/canyon-neuron-al-world-1.jpg'
const Discover = () => {
    return (
        <div class="hero h-auto bg-fixed md:h-[60vh]" style={{backgroundImage: `url(${DiscoverPhoto})`}}>
          <div class="hero-overlay bg-opacity-10"></div>
            <div class=" text-neutral-content">
              <div class="max-w-screen p-8 md:mx-24">
                <h1 class="mb-5 text-3xl md:text-5xl font-sans  font-bold text-white ">Extraordinary Original Quality Product, Exceptional Payment system.</h1>
                <h4 class="mb-5 text-md font-serif font-medium text-neutral lg:w-[600px] ">We are providing orginal cycle parts. Here you can find original shimano products.Here you can order at any time at any palce. Ovar all we provide our best services.</h4>
                <button class="btn btn-primary text-white">Discover More</button>
              </div>
            </div>
        </div>
    );
};

export default Discover;