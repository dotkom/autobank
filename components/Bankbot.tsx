import Link from 'next/link'
import { useState } from 'react'
import Chatbot from 'react-best-chatbot'

// https://www.npmjs.com/package/react-best-chatbot

/**
 * Creates a chatbot end step with blue link styling.
 * @param url Url of destination in chatbot end step
 * @param name Name of destination in chatbot end step
 * @returns Chatbot end step with link styling
 */
const linkEndStep = (url: string, name: string) => ({
  id: name,
  content: (
    <p>
      Gå til{' '}
      <span className="text-blue-500">
        <Link href={'/' + url}>{name}</Link>
      </span>
    </p>
  ),
  end: true,
})

type Step = {
  id: number | string
  content?: string //| object
  receiveInput?: boolean
  delay?: number
  fetch?: Function
  component?: { content: object; buble?: boolean }
  options?: Option[]
  goTo?: string | number
  validator?: Function
  end?: boolean
}

type Option = {
  content?: string //| Element
  value: number
  goTo: number | string
}

const steps: Step[] = [
  {
    id: 'start',
    content: 'Hei Onliner! Hvordan kan jeg hjelpe deg i dag?',
    options: [
      { value: 10, content: 'Har allerede brukt penger', goTo: 'har_brukt' },
      { value: 20, content: 'Ønsker å bruke penger', goTo: 'vil_bruke' },
      { value: 100, content: 'Ingen av disse passer', goTo: 'spor_bankom' },
    ],
  },
  {
    id: 'har_brukt',
    content: 'Velg en av disse:',
    options: [
      {
        value: 30,
        content:
          'Har bestilt en tjeneste/vare som Online skal bli fakturert for',
        goTo: 'faktura',
      },
      {
        value: 40,
        content: 'Har brukt penger på vegne av Online',
        goTo: 'kvittering',
      },
      { value: 100, content: 'Ingen av disse passer', goTo: 'spor_bankom' },
    ],
  },
  {
    id: 'vil_bruke',
    content: 'Velg en av disse:',
    options: [
      {
        value: 50,
        content:
          'Trenger over 10.000kr for å bruke noe som hjelper enhver Onliner',
        goTo: 'fondet',
      },
      {
        value: 60,
        content:
          'Ønsker penger til motivasjon for å jobbe med Online-relatert arbeid',
        goTo: 'onlinepotten',
      },
      { value: 100, content: 'Ingen av disse passer', goTo: 'spor_bankom' },
    ],
  },
  {
    id: 'spor_bankom',
    content: 'Send en mail til Bankom.',
    end: true,
  },
  /* Replacing the net four steeps below, but gives console error.
  linkEndStep('fondet', 'Online-fondet'),
  linkEndStep('onlinepotten', 'Onlinepotten'),
  linkEndStep('kvittering', 'kvitteringsskjema'),
  linkEndStep('faktura', 'fakturaskjema'),
  */
  { id: 'fondet', content: 'Søk Online-fondet!', end: true },
  { id: 'onlinepotten', content: 'Søk Onlinepotten!', end: true },
  { id: 'kvittering', content: 'Fyll ut kvitteringsskjema.', end: true },
  { id: 'faktura', content: 'Fyll ut fakturaskjema.', end: true },
]

const Bankbot = () => (
  <Chatbot
    style={{
      primaryColor: '#0D5474',
      secondaryColor: '#F9B759',
      textColor: 'white',
    }}
    options={{
      header: 'Bankbot',
      sendMessage: 'Velg et alternativ...',
      endContent: 'Start på nytt eller lukk oppe til høyre',
      sendComponent: <p></p>, //removes 'send' icon
      // botAvatarSrc: '', TODO: add custom chatbot avatar
      // open: false, connect to link on indexpage
    }}
    steps={steps}
  />
)

export default Bankbot
