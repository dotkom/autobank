import React from 'react'
import Image from 'next/image'
import receiptImage from 'images/undraw/undraw_receipt.svg'
import receipt from 'images/receipt.svg'
import { ButtonLink } from 'components/html/Button'

const Recipt = () => {
  return (
    <>
      {/* Greeting / bankbot */}
      <section className="flex mb-8">
        <div className=" space-y-2">
          <h1 className=" text-4xl py-5">Kvitteringer</h1>
          <p className="text-xl">
            Her finner du all info du trenger om kvitteringer!
          </p>
          <p className="text-sm">
            Alle kjøp for og av Online linjeforeningen krever en kvittering for
            at kjøpet skal godkjennes av Bankom.
          </p>
          <p className="text-sm">
            Er du usikker på hvilke krav som stilles til en kvittering? se her
          </p>
        </div>

        <div className="hidden md:block">
          <Image src={receiptImage} alt="Online kredittkort-bilde" />
        </div>
      </section>
      <section className="flex flex-col">
        <div className="">
          <p className="text-2xl font-light ">
            Ønsker du kun å sende inn kvittering?
          </p>
          <p className="text-sm">Gå rett til skjemaet her</p>
        </div>
        <div className="flex items-center justify-center pt-5">
          <ButtonLink href="kvittering/new">Kvitteringskjema</ButtonLink>
        </div>
      </section>
      <section className="flex flex-col">
        <div className=" space-y-2">
          <h1 className=" text-2xl font-light py-5">
            Hva er en gyldig kvittering?
          </h1>

          <p className="text-sm">
            Ingen kvitteringer er like med tanke på utforming eller
            formuleringer. Felles for alle er derimot at de må følge lovverket
            for alt av innhold. Sannsynligheten er derfor stor for at det er en
            kvittering om du finner disse punktene:
          </p>
          <ol className="text-sm list-decimal list-inside">
            <li>Selgers navn og organisasjonsnummer</li>
            <li>Dato og tidspunkt for salget</li>
            <li>En klar beskrivelse av varen eller tjenesten som er levert</li>
            <li>Pris med MVA spesifisert i norske kroner</li>
            <li>Total pris</li>
          </ol>
          <p className=" text-xs">
            Siste tips er at om du finner “Salgskvittering”, “Kvittering” eller
            “Faktura” så er det 90% sannsynlig en gyldig kvittering{' '}
          </p>
        </div>
        <div className="flex items-center justify-center p-5">
          <Image src={receipt} alt="example recipt" />
        </div>
      </section>
    </>
  )
}

export default Recipt
