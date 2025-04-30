import { useState } from 'react'
import Header from "./Components/Header"
import CurrentWeather from "./Components/CurrentWeather"
import Forecast from "./Components/Forecast"
import Background from "./Components/Background"
import './App.css'




function App() {
  const [city, setCity] = useState(" ");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);


  const apiKey = "7ced477d39aa44780e95afb9dec1c8bb"

  const fetchWeather = async (cityName) => {
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
      );
      const weather = await weatherRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
      );
      const forecast = await forecastRes.json();

      setWeatherData(weather);
      setForecastData(forecast);
      setCity(cityName);

    } catch (error) {
      console.error("Error al obtener el clima", error)
    }
  }


  return (
    <>
      <Background weather={weatherData} />
      <Header onSearch={weatherRes} />
      <main>
        <CurrentWeather data={weatherData} />
        <Forecast data={forecastData} />
      </main>
    </>
  )
}

export default App
