import React from 'react'

const CurrentWeather = ({ data }) => {
    if (!data) return null;

    const { name, weather, main, wind } = data;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <section className="current-weather">
            <h2>{name}</h2>
            <img src={iconUrl} alt={weather[0].description} />
            <p>{weather[0].description}</p>
            <p>{Math.round(main.temp)}°C</p>
            <p>Humeda:{main.humidity}%</p>
            <p>Viento:{wind.speed} K/ms</p>
        </section>
    )
}

export default CurrentWeather
