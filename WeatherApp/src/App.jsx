import { useState } from 'react'
import Header from "./Components/Header"
import CurrentWeather from "./Components/CurrentWeather"
import Forecast from "./Components/Forecast"
import Background from "./Components/Background"
import WeatherDescription from './Components/WeatherDescription'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { meta } from '@eslint/js'




function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchCount, setSearchCount] = useState(0);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY


  const fetchWeather = async (cityName) => {

    const query = cityName.trim();
    if (!query) return;

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
      );
      if (!weatherRes.ok) throw new Error("Ciudad no encontrada");
      const weather = await weatherRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
      );
      if (!forecastRes.ok) throw new Error("Pronóstico no disponible");
      const forecast = await forecastRes.json();

      setWeatherData(weather);
      setForecastData(forecast);
      setSearchCount((c) => c + 1)
      setCity(cityName);

    } catch (error) {
      console.error("Error al obtener el clima", error)
    }
  }

  useGSAP(() => {

    gsap.to(".current-weather, .weather-description", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
    });

    gsap.from(".forecast-day", {
      opacity: 1,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.in(1.7)",
      delay: 0.3
    })

    gsap.to(".background", {
      opacity: 1,
      duration: 1.5,
      ease: "power4.out"
    })

  }, [searchCount])


  return (
    <>
      <Background
        key={`bg-${searchCount}`}
        weather={weatherData}
      />

      <Header onSearch={fetchWeather} />
      <main>

        <CurrentWeather
          key={`cw-${searchCount}`}
          data={weatherData}
        />

        <Forecast
          key={`fc-${searchCount}`}
          data={forecastData}
        />


        {weatherData && (
          <WeatherDescription
            key={`wd-${searchCount}`}
            name={weatherData.name}
            description={weatherData.weather[0].description}
            temp={weatherData.main.temp}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
          />
        )}


      </main>
    </>
  )
}

export default App
