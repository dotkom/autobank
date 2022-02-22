import Chatbot from 'react-best-chatbot'

const steps = [
  {
    id: 1,
    content: 'hei hei',
    goTo: 2,
  },
  { id: 2, content: 'hade hade' },
]

const Bankbot = () => <Chatbot steps={steps} />

export default Bankbot
