import Header from 'components/Header/Header'
import Row from 'components/Row/Row'

interface FrontProps {
  cityName: string
  temp: number
  description: string
}

const Front: React.FC<FrontProps> = ({ cityName, temp, description }) => (
  <div className='Item Item--front'>
    <Row className='cityName--back' col={6}>
      <Header variant='h2' color='floralwhite'>
        {cityName}
      </Header>
    </Row>
    <Row col={1}>
      <Row col={12} className='temp'>
        {temp}°
      </Row>
      <Row col={12} className='description'>
        {description}
      </Row>
    </Row>
  </div>
  // <Container maxWidth="lg" className="Item Item--front">
  //     <div className="col-6-of-12 cityName--back">
  //         <h2 className="secondary__heading" style={{color: 'floralwhite'}}>{cityName}</h2>
  //     </div>
  //     <div className="col-1-of-12">
  //         <div className="temp">
  //             {temp}°
  //         </div>
  //         <div className="description">
  //             {description}
  //         </div>
  //     </div>
  // </Container>
)

export default Front
