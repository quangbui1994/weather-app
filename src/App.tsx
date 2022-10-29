import styles from './App.module.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import SearchForm from 'components/SearchForm/SearchForm'
import Card from 'components/Card/Card'
import { useState } from 'react'
import { WeatherData } from 'types'

const App = () => {
  const [data, setData] = useState<WeatherData | undefined>(undefined)

  return (
    <div className={styles.App}>
      <Container maxWidth='xl'>
        <Header variant='h1'>Weather Forecast</Header>
        <SearchForm setData={setData} />
        {data && <Card data={data} />}
      </Container>
    </div>
  )
}

export default App
