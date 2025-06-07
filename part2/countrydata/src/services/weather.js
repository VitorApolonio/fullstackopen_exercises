import axios from "axios"
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const iconUrl = 'https://openweathermap.org/img/wn'

const apiKey = import.meta.env.VITE_WEATHER_KEY

const get = (city, country) => {
  return axios
    .get(`${baseUrl}?q=${city},${country}&appid=${apiKey}`)
    .then(response => response.data)
}

const getIcon = (code) => {
  return `${iconUrl}/${code}@4x.png`
}

export default {
  get,
  getIcon,
}