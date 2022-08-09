import React from 'react'

type props = {
  children?: React.ReactNode
  className?: string
}

const Label = ({ className, children }: props) => {
  return (
    <label
      className={`text-online-blue-500 text-lg font-bold mb-2 ${className}`}
    >
      {children}
    </label>
  )
}

export default Label
