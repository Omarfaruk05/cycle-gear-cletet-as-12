import React from 'react';
import ProfilePhoto from '../../images/profile.png'

const About = () => {
    return (
        <div className='bg-base-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:g gap-5 bg-white mx-4 md:mx-12 rounded-3xl m-4 p-4'>
                <div className='bg-gray-500 rounded-3xl '>
                    <img src={ProfilePhoto} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold font-mono'>Hi, I'm Omar Faruk</h1>
                    <h1 className='text-2xl bg-accent w-fit p-1 rounded-md font-bold font-serif'>About Me</h1>
                    <div className='bg-base-200 rounded p-1 my-1'>
                        <h3 className='text-lg font-semibold p-1 rounded mb-1 w-fit'>Educational Background: <span className='font-semibold text-sm text-primary'>Studyign at Physics</span></h3>
                        
                    </div>
                    <h3 className='text-lg font-semibold p-1 rounded mb-1 w-fit bg-base-300'>Skils:</h3>
                    <p>I am a profetional web developer. </p>
                    <p className='p-2 bg-base-200 rounded-xl  mt-2 w-fit'>Email: <span>mdomarfaruk149518@gmail.com</span></p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;