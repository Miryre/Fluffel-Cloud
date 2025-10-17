import React from 'react';

const Hero = () => {
    return (
        <div className='relative bg-gray-900 text-white h-screen flex flex-col justify-center items-center'>
           {/* Background Video*/}
           <video
           className='absolute top-0 left-0 w-full h-full object-cover z-0'
           src='/video/cloudy-skies.mp4'
           autoPlay
           loop
           muted
           ></video>

           {/*Hero Content*/}
           <div className='relative z-10'>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 text-center'>
                Welcome to Fluffel Cloud
            </h1>
            <p className='text-lg md:text-2xl text-center mb-6'>
                Your easy weather forecast.
            </p>
            </div>
        </div>
    );
};

export default Hero;