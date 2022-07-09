import Button from '../../html/Button'
import ProgressBar from '../ProgressBar'

type props = {
  step: 0 | 1 | 2
  changeStep?: (step: number) => void
}

const Navigation = ({ step, changeStep }: props) => {
  return (
    <>
      <div className="max-w-lg w-full flex flex-row padding-top justify-around pt-12">
        {step !== 0 && <Button onClick={() => changeStep(-1)}>Tilbake</Button>}

        {step < 2 ? <Button>Neste</Button> : <Button>Send til Bankom</Button>}
      </div>
      <ProgressBar currentStep={step} />
    </>
  )
}

export default Navigation
