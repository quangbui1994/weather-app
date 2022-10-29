export type HeaderVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonVariant = 'primary' | 'secondary'

export interface WeatherData {
  cityName: string
  temp: number
  description: string
  tempMin: number
  tempMax: number
  humidity: number
  windSpeed: number
  windDeg: number
}
