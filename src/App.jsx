import React, { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
// state to hold the city name
    const [city, setCity] = useState('Dallas');

// state to hold weather data
    const [weatherData, setWeatherData] = useState(null);  

    return(
        <div>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;