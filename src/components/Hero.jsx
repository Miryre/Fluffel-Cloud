import React from 'react';
import WeatherCard from './WeatherCard';

const Hero = () => {
  return (
    <div className='relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center py-8'>
      {/* Background Video*/}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        src='/video/cloudy-skies.mp4'
        autoPlay
        loop
        muted
      ></video>
      
      {/*Hero Content*/}
      <div className='relative z-10 w-full px-4'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-center'>
          Welcome to Fluffel Cloud
        </h1>
        <p className='text-base md:text-xl lg:text-2xl text-center mb-6'>
          Your easy weather forecast.
        </p>
        
        {/* Weather Card goes here */}
        <WeatherCard />
      </div>
    </div>
  );
};

export default Hero;