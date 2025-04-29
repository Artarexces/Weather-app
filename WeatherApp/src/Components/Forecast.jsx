import React from 'react'

const Forecast = ({ forecast }) => {
    if (!forecast) return null;
    return (
        <section>
            <h3>Pronostico semanal</h3>
            <div className='forecast-card'>
                {forecast.map((day, index) => (
                    <div key={index}>
                        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <p>{Math.round(day.temp.day)}°C</p>
                        <p>{day.weather[0].main}</p>
                    </div>
                ))};
            </div>
        </section>
    );
};

export default Forecast
