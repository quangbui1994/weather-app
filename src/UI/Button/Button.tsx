import { ButtonVariant } from 'types'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  variant: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return <button className={`${styles.Button} ${styles[`Button-${variant}`]}`}>{children}</button>
}

export default Button
