import { ButtonVariant } from 'types'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  variant: ButtonVariant
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, variant, disabled }) => {
  const buttonStyles = [styles.Button, styles[`Button-${variant}`]]

  if (disabled) {
    buttonStyles.push(styles.disabled)
  }

  return <button className={buttonStyles.join(' ')}>{children}</button>
}

export default Button
