import React from 'react';
import { FlagIcon } from '@heroicons/react/solid'
import { DesktopComputerIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className='mx-2 md:mx-8 lg:mx-16 py-8'>
            <div>
                <h1 className='text-5xl text-center font-bold text-primary mb-8 underline'>Millions Business Trust Us</h1>
            </div>
            <div className='md:flex justify-between'>
                <div className='text-center'>
                    <FlagIcon className="mx-auto h-28 w-28 lg:h-48 lg:w-48 text-gray-600"/>
                    <h3 className='text-3xl font-bold'>70</h3>
                    <h4 className='text-3xl font-bold'>Countries</h4>
                </div>
                <div className='text-center'>
                    <DesktopComputerIcon className="mx-auto h-28 w-28 lg:h-48 lg:w-48 text-gray-600"/>
                    <h3 className='text-3xl font-bold'>535+</h3>
                    <h4 className='text-3xl font-bold'>Complete Projects</h4>
                </div>
                <div className='text-center'>
                    <UserGroupIcon className="mx-auto h-28 w-28 lg:h-48 lg:w-48 text-gray-600"/>
                    <h3 className='text-3xl font-bold'>275+</h3>
                    <h4 className='text-3xl font-bold'>Happy Clients</h4>
                </div>
                <div className='text-center'>
                    <EmojiHappyIcon className="mx-auto h-28 w-28 lg:h-48 lg:w-48 text-gray-600"/>
                    <h3 className='text-3xl font-bold'>432+</h3>
                    <h4 className='text-3xl font-bold'>Feedbacks</h4>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;