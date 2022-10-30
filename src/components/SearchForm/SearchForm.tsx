import React, { useReducer } from 'react'
import { isEmpty } from 'lodash'

import Container from 'components/Container/Container'
import Button from 'UI/Button/Button'
import Input from 'UI/Input/Input'
import styles from './SearchForm.module.scss'
import Row from 'components/Row/Row'
import { useAxios } from 'hooks/useAxios'
import Spinner from 'UI/Spinner/Spinner'
import { WeatherData } from 'types'
import { useEffect } from 'react'
import { parseData } from 'utils'

interface FormData {
  city: string
  country: string
}

interface FormProps {
  setData: React.Dispatch<WeatherData | undefined>
}

const INITIAL_DATA: FormData = {
  city: '',
  country: '',
}

const formReducer = (state: FormData, event: React.ChangeEvent<HTMLInputElement>) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

const SearchForm: React.FC<FormProps> = ({ setData }) => {
  const [formData, setFormData] = useReducer(formReducer, INITIAL_DATA)
  const { response, loading, fetch, error } = useAxios()

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    fetch({
      method: 'get',
      url: `/weather?q=${formData.city},${formData.country}&appid=${process.env.REACT_APP_WEATHER_API}`,
    })
  }

  useEffect(() => {
    setData(parseData(response))
  }, [response])

  return (
    <Container maxWidth='xl'>
      <form className={styles.SearchForm} onSubmit={submitHandler}>
        <Row col={4}>
          <Input
            error={error}
            name='city'
            placeHolder='City'
            label='City'
            value={formData.city}
            onChange={setFormData}
          />
        </Row>
        <Row col={4}>
          <Input
            name='country'
            placeHolder='Country'
            label='Country'
            value={formData.country}
            onChange={setFormData}
          />
        </Row>
        <Button disabled={isEmpty(formData.city) || isEmpty(formData.country)} variant='primary'>
          Check weather
        </Button>
      </form>
      {loading && <Spinner />}
    </Container>
  )
}

export default SearchForm
