import React from 'react'

const Error = ({ error }: { error?: string }) => {
  return error && <p className={'text-red-500 text-sm italic'}>{error}</p>
}

export default Error
