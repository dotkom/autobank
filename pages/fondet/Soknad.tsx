import React from 'react'

function Soknad(props) {
  return (
    <div className="flex">
      <p className="text-xl  font-bold w-1/4">{props.tittel}</p>
      <p className="text-lg w-3/4">{props.tekst}</p>
    </div>
  )
}

export default Soknad
