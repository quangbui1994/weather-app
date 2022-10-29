import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  label: string
  value: string
  placeHolder: string
  name: string
  onChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeHolder, name }) => {
  return (
    <div>
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
