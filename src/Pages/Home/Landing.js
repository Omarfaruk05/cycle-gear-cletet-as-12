import React from 'react';
import landingPhoto from '../../images/dressed-half-mens-body-standing-near-bicycle_171337-12910.webp'

const Landing = () => {
    return (
        <div class="hero h-auto bg-fixed md:h-[60vh]" style={{backgroundImage: `url(${landingPhoto})`}}>
          <div class="hero-overlay bg-opacity-0"></div>
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-screen px-8">
                <h1 class="mb-5 text-5xl md:text-7xl font-sans  font-bold text-orange-400 ">Wellcome to <span className='text-primary'>Cycle Gear</span></h1>
                <h4 class="mb-5 text-2xl font-serif font-medium text-neutral lg:w-[600px] mx-auto">We are providing orginal cycle parts. Here you can find original shimano products.Here you can order at any time at any palce. Ovar all we provide our best services.</h4>
                <button class="btn btn-primary text-white">Get Started</button>
              </div>
            </div>
        </div>
    );
};

export default Landing;