import React from 'react'
import Image from 'next/image'
import bilde from 'images/undraw/stonks.svg'

const Fondet = () => {
  return (
    <>
      <section className="w-full grid gap-20">
        <div className="">
          <p className="text-3xl">Onlines fond</p>
          <div className="grid md:grid-cols-2">
            <p className="text-xl">
              Hva er onlinefondet? Alle Onlines medlemmer kan søke Onlines fond
              om penger. Søknaden skal være velbegrunnet og ha som hensikt å
              komme flest mulig medlemmer av Online til gode. For at Fondstyre
              skal kunne ta en god avgjørelse trenger vi en helhetlig forståelse
              av hvem dere er og hva dere gjør. Skriv gjerne litt for mye, enn
              litt for lite. Søknaden er kun gyldig dersom det søkes om mellom
              10 000 kr og 100 000 kr. Dette skal være med i søknaden: Beskriv
              av dere selv Hva midlene skal brukes til Hvordan midlene går
              onlinere til gode Aktivitetsplan Budsjett Søknader sendes til:
              fond@online.ntnu.no
            </p>
            <Image alt="" src={bilde} />
          </div>
        </div>

        <div className="">
          <p className="text-3xl mb-10">SØKNAD OM STØTTE FRA ONLINES FOND</p>
          <p className="text-lg">
            Alle Onlines medlemmer kan søke Onlines fond om penger. Søknaden
            skal være velbegrunnet og ha som hensikt å komme flest mulig
            medlemmer av Online til gode. For at Fondstyre skal kunne ta en god
            avgjørelse trenger vi en helhetlig forståelse av hvem dere er og hva
            dere gjør. Skriv gjerne litt for mye, enn litt for lite. Søknaden er
            kun gyldig dersom det søkes om mellom 10 000 kr og 100 000 kr. Dette
            skal være med i søknaden: Beskriv av dere selv Hva midlene skal
            brukes til Hvordan midlene går onlinere til gode Aktivitetsplan
            Budsjett Søknader sendes til: fond@online.ntnu.no
          </p>
        </div>

        <div className="grid gap-10">
          <p className="text-3xl">Godkjente søknader med begrunnelse</p>

          <div>
            <p className="text-xl font-bold">Onlines band, Output</p>
            <p className="text-lg">
              Den 17. april 2018 fikk Fondstyret en søknad om å innvilge 24 733
              kr til Onlines nye linjeforeningsband, se vedlegg [26,6 KB] .
              Vedlagt var også en kjøpsliste fra en leverandør med spesifikke
              instrumenter de ønsket kjøpe, derav det spesifikke beløpet.
              Fondstyret var fornøyd med søknaden, men ønsket litt mer utdypende
              svar på noen temaer: "Vi saknar ein del kontekst for søknaden, og
              litt tankar om korleis dette kjem den gjengse onliner til gode. I
              dette konkrete tilfellet skulle vi gjerne lest litt om bandet,
              kven de er og kva de spelar, kva de har av utstyr frå før, kva
              aktivitetsnivået ligg på og kva ambisjonsnivået framover er for
              framføringar og slike ting. Vidare lurar vi på kva de har tenkt
              rundt praktiske ting som plass til lagring av utstyr, og om de har
              søkt midlar nokon anna plass." Fondstyret var tilfreds med svaret
              på søknaden og innvilget 25 000 kr til Onlines nyoppstartede
              linjeforeningsband.
            </p>
          </div>

          <div>
            <p className="text-lg font-bold">
              Kaffetrakter til Online kontoret
            </p>
            <p className="text-lg">
              Kaffetrakteren på Online kontoret har sluttet å fungere, og for å
              dekke onlineres tørst. Søkeren ble bedt om å utforske den
              foreslåtte kaffetrakterens levetid, garanti og
              reparasjonsmuligheter. Fondstyret var tilfreds med svaret de fikk
              og innvilget søknaden med beløpet 21 720 kr.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">X-sport: Surfetur til Portugal</p>
            <p className="text-lg">
              Interessegruppen X-Sport søkte om å få støtte til sin Portugal
              surfetur, tanken bak støtten var å gjøre turen mer overkommelig
              for flere av Online sine medlemmer ¨være med. Etter diskusjon i
              fondstyret ble det enighet om gi en støtte på 500 kr per
              deltagende hode, opptil maksimalt 10 000 kr.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold"> Arrkom: 2 stk Soundboks + sele</p>
            <p className="text-lg">
              Arrkom søke om å få støtte til å kjøpe inn 2 stk soundboks + seler
              til de. Tanken var å garantere alle Onlinere musikk på sine
              arrangementer og skape god stemning. Etter en litt lengre periode
              diskusjon som ble noenlunde utsatt ble fondstyret enig om å gi
              støtte til 1 stk soundboks + seler
            </p>
          </div>

          <div>
            <p className="text-xl font-bold">UKEtog flåtebygging:</p>
            <p className="text-lg"></p>Det ble søkt om støtte til materialer til
            bygging av flåte til UKEtoget, siden det var kort frist måtte
            søknaden behandles raskt. Etter en rask diskusjon på Slack og på
            mail ble fondet enig om å gi støtten
          </div>
          <div>
            <p className="text-xl font-bold">Online IL: Støtte</p>
            <p className="text-lg">
              Online IL søkte om å få støtte til å leie haller og kjøpe inn
              utstyr de kunne bruke. Fondstyret brukte litt lengre tid på å
              diskutere om de skulle støtte de med så mye penger. De ble
              tilslutt enige om å gi de pengene for mer langsiktig bruk en bare
              fram til Jul som det stod i den originale søknaden
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Fondet
