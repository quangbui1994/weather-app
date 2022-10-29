import Back from './Back'
import Front from './Front'
import './Card.scss'
import { WeatherData } from 'types'

interface CardProps {
  data: WeatherData
}

const Card: React.FC<CardProps> = ({
  data: { cityName, temp, description, tempMax, tempMin, humidity, windSpeed, windDeg },
}) => {
  const itemStyles = ['WeatherResultItem', 'section']

  return (
    <div className={itemStyles.join(' ')}>
      <Back
        cityName={cityName}
        temp={Math.round(temp)}
        description={description}
        tempMin={tempMin}
        tempMax={tempMax}
        humidity={humidity}
        windSpeed={windSpeed}
        windDeg={windDeg}
      />
      <Front cityName={cityName} temp={Math.round(temp)} description={description} />
    </div>
  )
}

export default Card
