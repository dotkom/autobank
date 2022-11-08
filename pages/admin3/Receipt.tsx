import React from 'react'

function Receipt(props) {
  return (
    <div className="h-14 w-full  my-4 flex flex-col-3 items-center p-6 overflow-hidden bg-gray-100 shadow-md border-l-8 border-online-blue-500">
      <p className="text-xl  w-2/6 ml-8">{props.title}</p>
      <p className="text-md w-3/6"> {props.description}</p>
      <p className="text-md w-1/6 ">18. okt 22</p>
    </div>
  )
}

export default Receipt
