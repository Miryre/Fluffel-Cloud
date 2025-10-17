import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
// API key - 0db2bc7e6467fafe72782bd27c9a4cdf
const API_KEY ='0db2bc7e6467fafe72782bd27c9a4cdf'

// state to hold the city name
    const [city, setCity] = useState('Dallas');

// state to hold weather data
    const [weatherData, setWeatherData] = useState(null);  

// loading state
const [loading, setLoading] = useState(false);

// error state
const [error, setError] = useState('');

//weather fetch
const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        setWeatherData(data);
        console.log('Weather data:', data);
    } catch (err) { 
        setError ('Could not find city. Please try again');
        setWeatherData (null);
    } finally {
        setLoading(false);
    }

};

// function that handles the search whis call the input form the navbar
    const handleSearch =(searchedCity) => {
        setCity(searchedCity);
        fetchWeather(searchedCity);
        console.log('User searched for:', searchedCity);
    };    

    return(
        <div>
            <Navbar onSearch={handleSearch} />
            <Hero weatherData={weatherData} loading={loading} error={error} />
            <Footer />
        </div>
    );
};

export default App;