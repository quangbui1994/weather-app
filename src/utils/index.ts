import { WeatherData } from 'types'

export const capitalizeFirstLetter = (word: string): string =>
  word.charAt(0).toUpperCase().concat(word.slice(1))

export const parseData = (data: any): WeatherData | undefined => {
  return data
    ? {
        cityName: data.name,
        temp: data.main.temp,
        description: data.weather[0].main,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
      }
    : undefined
}
