import styles from './App.module.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import SearchForm from 'components/SearchForm/SearchForm'
import Card from 'components/Card/Card'
import { useState } from 'react'
import { WeatherData } from 'types'
import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } from 'utils'

const App = () => {
  const [data, setData] = useState<WeatherData | undefined>(undefined)

  const convertDegree = () => {
    if (data?.unit === 'metric') {
      setData(
        (data) =>
          ({
            ...data,
            temp: convertCelsiusToFahrenheit(data!.temp),
            unit: 'imperial',
          } as WeatherData),
      )
    } else {
      setData(
        (data) =>
          ({
            ...data,
            temp: convertFahrenheitToCelsius(data!.temp),
            unit: 'metric',
          } as WeatherData),
      )
    }
  }

  return (
    <div className={styles.App}>
      <Container maxWidth='xl'>
        <Header variant='h1'>Weather Forecast</Header>
        <SearchForm convertDegree={convertDegree} setData={setData} toggleDisabled={!data} />
        {data && <Card data={data} />}
      </Container>
    </div>
  )
}

export default App
