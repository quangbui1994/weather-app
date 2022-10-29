import styles from './App.module.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import SearchForm from 'components/SearchForm/SearchForm'

const App = () => {
  return (
    <div className={styles.App}>
      <Container maxWidth='xl'>
        <Header>Weather Forecast</Header>
        <SearchForm />
      </Container>
    </div>
  )
}

export default App
