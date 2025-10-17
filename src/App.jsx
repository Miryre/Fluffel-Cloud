import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  // API key
  const API_KEY = '0db2bc7e6467fafe72782bd27c9a4cdf';
  
  // state to hold the city name
  const [city, setCity] = useState('Dallas');
  
  // state to hold weather data
  const [weatherData, setWeatherData] = useState(null);
  
  // state to hold forecast data
  const [forecastData, setForecastData] = useState(null);
  
  // loading state
  const [loading, setLoading] = useState(false);
  
  // error state
  const [error, setError] = useState('');

  // Fetch current weather and 7-day forecast
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    
    try {
      // Get current weather from OpenWeatherMap (for current conditions)
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('City not found');
      }
      
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);
      console.log('Current weather data:', weatherData);

      // Get coordinates for Open-Meteo
      const lat = weatherData.coord.lat;
      const lon = weatherData.coord.lon;

      // Fetch 7-day forecast from Open-Meteo (FREE!)
      const forecastResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&temperature_unit=fahrenheit&timezone=auto`
      );
      
      if (forecastResponse.ok) {
        const forecastData = await forecastResponse.json();
        setForecastData(forecastData);
        console.log('7-Day forecast data:', forecastData);
      }
      
    } catch (err) {
      setError('Could not find city. Please try again');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  // function that handles the search which calls the input from the navbar
  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
    fetchWeather(searchedCity);
    console.log('User searched for:', searchedCity);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Hero weatherData={weatherData} forecastData={forecastData} loading={loading} error={error} />
      <Footer />
    </div>
  );
};

export default App;