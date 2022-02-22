import Chatbot from 'react-best-chatbot'

/* 
Types based on props at the bottom of this page.
https://github.com/lucasfernando06/React-best-chatbot/blob/main/dist/index.js
*/

type Step = {
  id: number | string
  content?: string
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
  content?: string | object
  value: number
  goTo: number | string
}

const steps: Step[] = [
  {
    id: 'default',
    content: 'Hei Onliner! Hvordan kan jeg hjelpe deg i dag?',
    options: [
      { value: 10, content: 'Skal bruke penger', goTo: 'skal_bruke' },
      { value: 20, content: 'Har allerede brukt penger', goTo: 'har_brukt' },
    ],
  },
  {
    id: 'skal_bruke',
    content: 'Velg en av disse.',
    options: [
      {
        value: 30,
        content:
          'Trenger over 10.000kr for å bruke noe som hjelper enhver Onliner',
        goTo: 'fondet',
      },
      {
        value: 40,
        content:
          'Ønsker penger til motivasjon for å jobbe med Online-relatert arbeid',
        goTo: 'onlinepotten',
      },
    ],
  },
  {
    id: 'har_brukt',
    content: 'Velg en av disse.',
    options: [
      {
        value: 50,
        content: 'Har brukt penger på vegne av online',
        goTo: 'kvittering',
      },
      {
        value: 60,
        content:
          'Har bestilt en tjeneste/vare som online skal bli fakturert for',
        goTo: 'faktura',
      },
    ],
  },
  {
    id: 'fondet',
    content: 'Søk Online-fondet',
    end: true,
  },
  {
    id: 'onlinepotten',
    content: 'Søk Onlinepotten!',
    end: true,
  },
  {
    id: 'kvittering',
    content: 'Fyll inn et kvitteringsskjema',
    end: true,
  },
  {
    id: 'faktura',
    content: 'Gå til Online sin fakturainfo',
    end: true,
  },
]

const Bankbot = () => (
  <Chatbot
    style={{
      primaryColor: '#0D5474',
      secondaryColor: '#F9B759',
      textColor: 'white',
    }}
    options={{ header: 'Bankbot' }}
    steps={steps}
  />
)

export default Bankbot
