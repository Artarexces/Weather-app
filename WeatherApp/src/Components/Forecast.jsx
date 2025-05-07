import React from 'react'

const Forecast = ({ data }) => {
    if (!data || !data.list)
        return null;

    const dailyData = {};

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString('es-AR');

        if (!dailyData[date]) {
            dailyData[date] = {
                temps: [],
                icons: [],
                description: []
            };
        }

        dailyData[date].temps.push(item.main.temp);
        dailyData[date].icons.push(item.weather[0].icon);
        dailyData[date].description.push(item.weather[0].description)
    });

    const summerizedForecast = Object.entries(dailyData).map(([date, values]) => {
        const min = Math.min(...values.temps);
        const max = Math.max(...values.temps);
        const icon = values.icons[0];
        const description = values.description[0];

        return { date, min, max, icon, description };
    });
    return (
        <section>
            <h3>Pronostico semanal</h3>
            <div className='forecast-card'>
                {summerizedForecast.map((day, index) => (
                    <div key={index} className='forecast-day'>
                        <p>{day.date}</p>
                        <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt={day.description} />
                        <p>{Math.round(day.min)}°C / {Math.round(day.max)}°C</p>
                        <p>{day.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Forecast
