import WeatherService from '../services/weather'
import { useState, useEffect } from 'react'

const CountryPage = ({ country }) => {
  const [weatherData, setWeatherData] = useState({})
  
  useEffect(() => {
    WeatherService
      .get(country.capital, country.name.common)
      .then(response => {
        setWeatherData({
          ...weatherData,
          temp: response.main.temp,
          wind: response.wind.speed,
          iconUrl: WeatherService.getIcon(response.weather[0].icon),
        })
      })
      .finally(response => console.log(response))
  }, [])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Land area: {country.area} km²</p>
      <h2>Languages</h2>
      <ul>
        {
          (() => {
            const list = []
            for (const l in country.languages) {
              list.push(<li key={list.length}>{country.languages[l]}</li>)
            }
            return list
          })()
        }
      </ul>
      <img src={country.flags.svg} width='40%' alt={`Flag of ${country.name.common}`} />
      <h2>Weather in {country.capital}</h2>
      <p>Temperature: {(weatherData.temp - 273.15).toFixed(2)} ºC</p>
      <p>Wind speed: {weatherData.wind} m/s</p>
      <img src={weatherData.iconUrl} />
    </div>
  )
}

export default CountryPage