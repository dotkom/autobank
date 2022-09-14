import React from 'react'

function Receipt(props) {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-4 gap-4 text-md md:text-xl">
        <div>{props.tittel}</div>
        <div>{props.dato}</div>
        <div>{props.kostnad}</div>
        <div>{props.status}</div>
      </div>
    </div>
  )
}

export default Receipt
