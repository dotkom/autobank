import React from 'react'

function Soknad(props) {
  return (
    <div className="flex gap-8 flex-col mb-12">
      <p className="text-lg md:text-xl text-center md:text-left  font-bold md:w-1/4">
        {props.tittel}
      </p>
      <p className="text-md md:text-lg md:w-3/4">{props.tekst}</p>
    </div>
  )
}

export default Soknad
