import Chatbot from 'react-best-chatbot'

const steps = [
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

const Bankbot = () => <Chatbot steps={steps} />

export default Bankbot
