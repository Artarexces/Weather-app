import React from 'react'
import './Background.css'

const Background = ({ weather, hour }) => {
    let className = 'default';

    if (weather?.includes('rain')) className = 'rain';
    else if (weather?.includes('cloudy')) className = 'cloudy';
    else if (weather?.includes('clear')) className = hour > 18 ? 'night' : 'clear';
    return (
        <div className={`background ${className}`}></div>
    )
}

export default Background
