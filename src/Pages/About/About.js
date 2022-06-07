import React from 'react';
import ProfilePhoto from '../../images/profile.png'
import website1 from '../../images/Screenshot 2022-05-26 234905.png'
import website2 from '../../images/Screenshot 2022-05-26 234958.png'
import website3 from '../../images/Screenshot 2022-05-26 235049.png'

const About = () => {
    return (
        <div className='bg-base-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 bg-white mx-4 md:mx-12 rounded-3xl m-4 p-4'>
                <div className='bg-gray-500 rounded-3xl '>
                    <img width={'400px'} className="mx-auto" src={ProfilePhoto} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold font-mono'>Hi, I'm Omar Faruk</h1>
                    <h1 className='text-2xl bg-accent w-fit p-1 rounded-md font-bold font-serif'>About Me</h1>
                    <div className='bg-base-200 rounded p-1 my-1'>
                        <h3 className='text-lg font-semibold p-1 rounded mb-1 w-fit'>Educational Background: <span className='font-semibold text-sm text-primary'>Studying at Physics   </span></h3>
                        
                    </div>
                    <h3 className='text-lg font-semibold p-1 rounded mb-1 w-fit bg-base-300'>Skils:</h3>
                    <p>I am a webdeveloper. I learnt webdeveloping from 2021. I am know HTML, CSS, Bootstrap, Tailwindcss, Javascript, React js, node js, mongodb and other necessary libraries which is needed in react js. Libraries are react hooks forms , react query, daisy Ui etc. </p>
                    <p className='p-2 bg-base-200 rounded-xl  mt-2 w-fit'>Email: <span>mdomarfaruk149518@gmail.com</span></p>
                </div>
            </div>
            <div>
                <h1>My Recent Work </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-20 bg-base-300">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <img src= {website2}  alt=""/>
                </div>
                <div className='w-full text-center mb-2'>
                   <button className='btn btn-xs btn-primary'>
                        <a target={'_blank'} href="https://electro-mart-36ca8.web.app/" alt=""> Site link</a>
                   </button>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <img src= {website3}  alt=""/>
                </div>
                <div className='w-full text-center mb-2'>
                    <button className='btn btn-xs btn-primary'>
                        <a target={'_blank'} href="https://fr-photography.web.app/" alt=""> Site link</a>
                    </button>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={website1} alt="" />
                </div>
                <div className='w-full text-center mb-2'>
                    <button className='btn btn-xs btn-primary'>
                        <a target={'_blank'} href="https://fr-photography.web.app/" alt=""> Site link</a>
                    </button>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default About;