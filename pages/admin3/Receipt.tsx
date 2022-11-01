import React from 'react'

function Receipt(props) {
  return (
    <div className="h-16 w-full  my-4 flex flex-col-3 items-center p-6 overflow-hidden bg-gray-100 shadow-md">
      <p className="text-xl font-bold w-2/6 ml-8">{props.title}</p>
      <p className="text-md w-3/6"> {props.description}</p>
      <p className="text-md w-1/6 ">18. okt 22</p>
    </div>
  )
}

export default Receipt
