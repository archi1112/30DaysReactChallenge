import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const {
        location: { name, country },
        current: {
            condition: { icon, text },
            temp_c,
            feelslike_c,
            humidity,
        },
        forecast: {
            forecastday: [{
                day: { maxtemp_c, mintemp_c },
            }],
        },
    } = weather;

    return (
        <div className="weather_card">
            <div className="card_header">
                <div>
                    <p className="weather_city">{`City : ${name} Country:${country}`}</p>
                    <img src={icon} alt="" className="src" />
                    <h3>{text}</h3>
                    <h1>{`${temp_c}°C`}</h1>
                    <div className="extra_info">
                        <div className="left_info">
                            <h3>{`Real feel ${feelslike_c}°C`}</h3>
                            <h3>{`Humidity: ${humidity}`}</h3>
                            <h3>{`Max Temp: ${maxtemp_c}`}</h3>
                        </div>
                        <div className="right_info">
                            <h3>{`Wind Speed: ${weather.current.gust_mph}km/h`}</h3>
                            <h3>{`Pressure: ${weather.current.pressure_mb}mbar`}</h3>
                            <h3>{`Min Temp: ${mintemp_c}`}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
