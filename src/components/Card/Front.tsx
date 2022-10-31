import Header from 'components/Header/Header'
import Row from 'components/Row/Row'
import { WeatherData } from 'types'

type FrontProps = Pick<WeatherData, 'cityName' | 'temp' | 'description' | 'unit'>

const Front: React.FC<FrontProps> = ({ cityName, temp, description, unit }) => (
  <div className='Item Item--front'>
    <Row className='cityName--back' col={6}>
      <Header variant='h2' color='floralwhite'>
        {cityName}
      </Header>
    </Row>
    <Row col={1}>
      <Row col={12} className='temp'>
        {temp}°{unit === 'metric' ? 'C' : 'F'}
      </Row>
      <Row col={12} className='description'>
        {description}
      </Row>
    </Row>
  </div>
)

export default Front
