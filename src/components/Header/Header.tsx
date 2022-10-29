import React from 'react'
import { HeaderVariant } from 'types'
import styles from './Header.module.scss'

interface HeaderProps {
  children: React.ReactNode
  color?: string
  variant: HeaderVariant
}

const Header: React.FC<HeaderProps> = ({ children, color, variant }) => {
  return (
    <div className={`${styles.Header} ${styles[variant]}`} style={{ color }}>
      {children}
    </div>
  )
}

export default Header
