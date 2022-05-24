import React from 'react';

const Footer = () => {
    return (
        <div className='bg-accent'>
            <div className='flex justify-between items-center mx-2 md:mx-8 lg:mx-16 my-8'>
                <div>
                    <h5 className='text-white font-semibold text-lg'>Copyright © 2022 Dhaka, All rights reserved. Powered by Omar Faruk.</h5>
                </div>
                <div className='flex'>
                    <a target="_blank" href="https://github.com/Omarfaruk05" className='mr-4'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" class="global-footer-social__icon w-28 md:w-12" alt="Facebook" title="Facebook" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100023919873768" className='mr-4'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg" class="global-footer-social__icon rounded w-28 md:w-12" alt="Facebook" title="Facebook" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/omarfaruk0005/" className='mr-4'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" class="global-footer-social__icon  w-28 md:w-12" alt="Instagram" title="Instagram" />
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;