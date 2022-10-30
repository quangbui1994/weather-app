import { ButtonVariant } from 'types'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  variant: ButtonVariant
  disabled?: boolean
  onClick?: () => void
  type: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({ children, variant, disabled, onClick, type }) => {
  const buttonStyles = [styles.Button, styles[`Button-${variant}`]]

  if (disabled) {
    buttonStyles.push(styles.disabled)
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyles.join(' ')}>
      {children}
    </button>
  )
}

export default Button
