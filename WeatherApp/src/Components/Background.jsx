import React from 'react'


const Background = ({ weather }) => {
    let className = 'default';

    if(weather && weather.weather && weather.weather.length){
        const condition = weather.weather[0].main.toLowerCase();

        const hour = new Date(weather.dt * 1000).getHours();

        if(condition.includes('rain')) {
            className ='rain';
        } else if (condition.includes('cloud')){
            className = 'cloudy';
        } else if (condition.includes('clear')){
            className = hour >= 18 || hour < 6 ? 'night' : 'clear';
        }
    }
    return (
        <div className={`background ${className}`}></div>
    )
}

export default Background
