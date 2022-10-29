import React from 'react'

interface RowProps {
  children: React.ReactNode
  col: number
}

const Row: React.FC<RowProps> = ({ children, col }) => {
  return <div className={`col-${col}-of-12`}>{children}</div>
}

export default Row
