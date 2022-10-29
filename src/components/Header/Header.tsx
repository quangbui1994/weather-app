import React from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className={styles.Header}>{children}</div>
}

export default Header
