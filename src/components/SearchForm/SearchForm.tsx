import React, { useReducer } from 'react'

import Container from 'components/Container/Container'
import Button from 'UI/Button/Button'
import Input from 'UI/Input/Input'
import styles from './SearchForm.module.scss'
import Row from 'components/Row/Row'

interface FormData {
  city: string
  country: string
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

const SearchForm = () => {
  const [formData, setFormData] = useReducer(formReducer, INITIAL_DATA)

  const submitHandler = () => {
    console.log('click')
  }

  return (
    <Container maxWidth='xl'>
      <form className={styles.SearchForm} onSubmit={submitHandler}>
        <Row col={4}>
          <Input
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
        <Button variant='primary'>See weather</Button>
      </form>
    </Container>
  )
}

export default SearchForm
