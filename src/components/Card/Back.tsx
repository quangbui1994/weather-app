import { WeatherData } from 'types'
import Icon from 'UI/Icon/Icon'

type BackProps = WeatherData

const Back: React.FC<BackProps> = ({
  cityName,
  temp,
  description,
  tempMax,
  tempMin,
  humidity,
  windSpeed,
  windDeg,
  unit,
}) => {
  const itemBackStyles = ['Item', 'Item--back--user']

  return (
    <div className={itemBackStyles.join(' ')}>
      <div className='col-12-of-12'>
        <h2 className='secondary__heading' style={{ color: 'floralwhite' }}>
          {cityName}
        </h2>
      </div>
      <div className='col-3-of-12'>
        <div className='temp'>
          {temp}°{unit === 'metric' ? 'C' : 'F'}
        </div>
        <div className='description'>{description}</div>
      </div>
      <div
        className='detailResult col-9-of-12'
        style={{ position: 'absolute', right: '0', top: '1rem' }}
      >
        <div className='row col-3-of-12 resultItem'>
          <div className='col-12-of-12'>
            <Icon iconName='thermometer' size={5} />
          </div>
          <div className='col-12-of-12 itemInfo'>
            <div className='col-6-of-12'>Min. {tempMin}°</div>
            <div className='col-6-of-12'>Max. {tempMax}°</div>
          </div>
        </div>
        <div className='col-3-of-12 resultItem'>
          <div className='col-12-of-12'>
            <Icon iconName='water' size={5} />
          </div>
          <div className='col-12-of-12 itemInfo'>
            <div className='col-6-of-12'>Humidity. {humidity}%</div>
          </div>
        </div>
        <div className='col-3-of-12 resultItem'>
          <div className='col-12-of-12'>
            <Icon iconName='cloud-outline' size={5} />
          </div>
          <div className='col-12-of-12 itemInfo'>
            <div className='col-6-of-12'>Wind Speed. {windSpeed} m/s</div>
            <div className='col-6-of-12'>Deg. {windDeg}°</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Back
