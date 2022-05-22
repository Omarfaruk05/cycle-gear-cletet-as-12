import React from 'react';

const Location = () => {
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className='bg-primary text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.242537006296!2d90.42114741521755!3d24.268257784336637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375670ef34eae1f7%3A0xa9d7b23414fd0e7d!2sTelihaty%20High%20School!5e0!3m2!1sen!2sbd!4v1652030356689!5m2!1sen!2sbd" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Contact Info. </h1>
                        <h3 className='text-2xl font-semibold my-4'>Address:</h3>
                        <p className='font-semibold'>Telihaty, Sreepur, Gazipur, Dhaka, Bangladesh</p>
                        <h3 className='text-2xl font-semibold my-4'>Phone:</h3>
                        <p className='font-semibold'>01567900262, 01941221528, 01834765144</p>
                        <h3 className='text-2xl font-semibold my-4'>Email:</h3>
                        <p className='font-semibold'>mdomarfaruk149518@gmail.com, omarfaruk149518@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>News</h1>
                        <h3 className='text-xl font-semibold'>Get the latest creative news. Subscribe!</h3>
                        <form onSubmit={handleSubmit}>
                            <input className='input' type="email" placeholder='Enter Your Email' name="email" required/>
                            <button className='btn btn-secondary m-2'>GO</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;