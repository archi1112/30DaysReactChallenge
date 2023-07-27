import React from 'react';

const WeatherCard = ({ weather }) => {
    return (
        <div className="weather_card">
            <div className="card_header">
                <div>
                    <p className="weather_city">{weather ? (weather.location.name + ' ' + weather.location.country) : ' '}</p>
                    <img src={weather ? (weather.current.condition.icon) : (' ')} alt="" className="src" />
                    <h3>{weather ? (weather.current.condition.text) : (' ')}</h3>
                    <h1>{weather ? (`${weather.current.temp_c}°C`) : (' ')}</h1>
                    <div className="extra_info">
                        <div className="left_info">
                            <h3>{weather ? (`Real feel ${weather.current.feelslike_c}°C`) : (' ')}</h3>
                            <h3>{weather ? (`Humidity: ${weather.current.humidity}`) : (' ')}</h3>
                            <h3>{weather ? (`Max Temp: ${weather.forecast.forecastday[0].day.maxtemp_c}`) : (' ')}</h3>
                        </div>
                        <div className="right_info">
                            <h3>{weather ? (`Wind Speed: ${weather.current.gust_mph}km/h`) : (' ')}</h3>
                            <h3>{weather ? (`Pressure: ${weather.current.pressure_mb
                                }mbar`) : (' ')}</h3>
                            <h3>{weather ? (`Min Temp: ${weather.forecast.forecastday[0].day.mintemp_c}`) : (' ')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard