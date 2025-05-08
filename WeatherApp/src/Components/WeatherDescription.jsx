import React from 'react'

const WeatherDescription = ({ name, description, temp, humidity, windSpeed }) => {

    const desc = description.charAt(0).toUpperCase() + description.slice(1)
    return (
        <div className='weather-description'>
            <p>Hoy el clima en <strong>{name}</strong> esta {desc},</p>
            <p>con una temperatura de {Math.round(temp)}°C, humedad {humidity}%</p>
            <p>y viento a {windSpeed} m/s</p>
        </div>
    )
}

export default WeatherDescription
