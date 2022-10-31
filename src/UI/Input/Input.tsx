import React from 'react'
import { capitalizeFirstLetter } from 'utils'
import styles from './Input.module.scss'

interface InputProps {
  label: string
  value: string
  placeHolder: string
  name: string
  error?: any
  onChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeHolder, name, error }) => {
  return (
    <div className={styles.inputWrapper}>
      {error && (
        <p>{capitalizeFirstLetter(error?.response?.data?.message) ?? 'Something went wrong'}</p>
      )}
      <input
        name={name}
        placeholder={placeHolder}
        className={styles.Input}
        type='text'
        value={value}
        onChange={onChange}
      />
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Input
