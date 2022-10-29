import { ContainerMaxWidth } from 'types'
import styles from './Container.module.scss'

interface ContainerProps {
  children: React.ReactNode
  maxWidth: ContainerMaxWidth
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth }) => {
  return <div className={`${styles.Container} ${styles[maxWidth]}`}>{children}</div>
}

export default Container
