import React from 'react'
import Receipt from './Receipt'

function ReceiptList() {
  return (
    <div className="container mx-auto px-4">
      <p className="text-3xl py-10"> Kvitteringer </p>
      <div className="grid grid-cols-4 gap-4 text-xl font-bold py-5">
        <div>Kvitteringstittel</div>
        <div>Dato opprettet</div>
        <div>Beløp</div>
        <div>Kvitteringsstatus</div>
      </div>
      <div className="grid grid-cols-1 gap-4 text-lg">
        <Receipt
          tittel="Utgift bedpres"
          dato="12/7"
          kostnad="1000"
          status="venter på godkjenning"
        />
        <Receipt
          tittel="Utgift bedpres"
          dato="12/7"
          kostnad="1000"
          status="venter på godkjenning"
        />
        <Receipt
          tittel="Utgift bedpres"
          dato="12/7"
          kostnad="1000"
          status="venter på godkjenning"
        />
      </div>
    </div>
  )
}

export default ReceiptList
