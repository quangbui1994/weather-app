import React from 'react'

interface RowProps {
  children: React.ReactNode
  col: number
  className?: string
}

const Row: React.FC<RowProps> = ({ children, col, className }) => {
  return <div className={`col-${col}-of-12 ${className}`}>{children}</div>
}

export default Row
