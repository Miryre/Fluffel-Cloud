import React from 'react';
import WeatherCard from './WeatherCard';

const Hero = ({ weatherData, loading, error }) => {
  return (
    <div className='relative bg-gray-900 text-white h-[75vh] flex flex-col justify-start items-center pt-20 pb-8'>
      {/* Background Video*/}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        src='/video/cloudy-skies.mp4'
        autoPlay
        loop
        muted
      ></video>
      
      {/*Hero Content*/}
      <div className='relative z-10 w-full px-4 flex flex-col h-full'>
        <div className='mb-4'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center'>
            Welcome to Fluffel Cloud
          </h1>
          <p className='text-sm md:text-base lg:text-xl text-center'>
            Your easy weather forecast.
          </p>
        </div>
        
        {/* Weather Card goes here */}
        <div className='flex-1 flex items-center'>
        <WeatherCard weatherData={weatherData} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default Hero;