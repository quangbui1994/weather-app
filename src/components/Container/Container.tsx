import { ContainerMaxWidth } from 'types'
import styles from './Container.module.scss'

interface ContainerProps {
  children: React.ReactNode
  maxWidth: ContainerMaxWidth
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth, className }) => {
  return <div className={`${styles.Container} ${styles[maxWidth]} ${className}`}>{children}</div>
}

export default Container
