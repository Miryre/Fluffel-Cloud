import React from 'react';

const WeatherCard = () => {
  return(
    <div className="bg-black/40 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 w-full max-w-[95%] lg:max-w-[80%] mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Left Section - Current Weather */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-2">
            Dallas, TX
          </h2>
          
          <div className="text-center mb-3">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">72°F</p>
            <p className="text-base md:text-lg lg:text-2xl text-white/80 mt-1">Partly Cloudy</p>
          </div>
          
          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <p className="text-white/70 text-xs md:text-sm">Feels Like</p>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">70°F</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <p className="text-white/70 text-xs md:text-sm">Humidity</p>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">65%</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <p className="text-white/70 text-xs md:text-sm">Wind</p>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">12 mph</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <p className="text-white/70 text-xs md:text-sm">High/Low</p>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">75°/65°</p>
            </div>
          </div>
        </div>
        
        {/* Middle Section - Weekly Forecast */}
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">7-Day Forecast</h3>
          
          <div className="space-y-2 overflow-y-auto max-h-60 md:max-h-72 lg:max-h-80">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Mon</span>
              <span className="text-white/80 text-sm md:text-base">☀️ Sunny</span>
              <span className="text-white font-semibold text-sm md:text-base">78°/62°</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Tue</span>
              <span className="text-white/80 text-sm md:text-base">⛅ Cloudy</span>
              <span className="text-white font-semibold text-sm md:text-base">75°/60°</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Wed</span>
              <span className="text-white/80 text-sm md:text-base">🌧️ Rainy</span>
              <span className="text-white font-semibold text-sm md:text-base">68°/58°</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Thu</span>
              <span className="text-white/80 text-sm md:text-base">⛅ Cloudy</span>
              <span className="text-white font-semibold text-sm md:text-base">72°/59°</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Fri</span>
              <span className="text-white/80 text-sm md:text-base">☀️ Sunny</span>
              <span className="text-white font-semibold text-sm md:text-base">80°/64°</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Sat</span>
              <span className="text-white/80 text-sm md:text-base">☀️ Sunny</span>
              <span className="text-white font-semibold text-sm md:text-base">82°/66°</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2.5 md:p-3 border border-white/20 flex justify-between items-center">
              <span className="text-white font-semibold text-sm md:text-base">Sun</span>
              <span className="text-white/80 text-sm md:text-base">⛅ Cloudy</span>
              <span className="text-white font-semibold text-sm md:text-base">77°/63°</span>
            </div>
          </div>
        </div>
        
        {/* Right Section - Weather News */}
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Weather News</h3>
          
          <div className="space-y-3 overflow-y-auto max-h-60 md:max-h-72 lg:max-h-80">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <h4 className="text-white font-semibold text-sm md:text-base mb-1">Storm Warning Issued</h4>
              <p className="text-white/70 text-xs md:text-sm">Severe thunderstorms expected this weekend.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <h4 className="text-white font-semibold text-sm md:text-base mb-1">Heat Wave Coming</h4>
              <p className="text-white/70 text-xs md:text-sm">Temperatures expected to reach 100°F next week.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20">
              <h4 className="text-white font-semibold text-sm md:text-base mb-1">Air Quality Alert</h4>
              <p className="text-white/70 text-xs md:text-sm">Moderate air quality. Limit outdoor activities.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WeatherCard;