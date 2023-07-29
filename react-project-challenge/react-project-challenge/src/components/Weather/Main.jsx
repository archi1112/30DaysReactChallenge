import React, { useState } from 'react'
import { fetchWeather } from './api';
import WeatherCard from './WeatherCard';
import './style.css';
const Main = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const weather = await fetchWeather(city, setError);
            setWeather(weather);
        }
        catch (error) {
            setError('city not found');
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }
    return (
        <div className="main_box">
            <div className="main">
                <h1 className="main_heading">Weather App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter city" value={city} onChange={handleChange} />
                    <button type="submit">Search</button>
                </form>

                {error ? (<p className='error'>{error}</p>) : (<WeatherCard weather={weather} />)}
            </div>
        </div>
    )
}

export default Main