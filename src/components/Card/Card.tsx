import Back from './Back'
import Front from './Front'
import './Card.scss'
import { WeatherData } from 'types'

interface CardProps {
  data: WeatherData
}

const Card: React.FC<CardProps> = ({
  data: { cityName, temp, description, tempMax, tempMin, humidity, windSpeed, windDeg, unit },
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
        unit={unit}
      />
      <Front cityName={cityName} temp={Math.round(temp)} description={description} unit={unit} />
    </div>
  )
}

export default Card
