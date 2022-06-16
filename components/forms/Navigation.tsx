import Button from 'components/html/Button'
import ProgressBar from './ProgressBar'

type props = {
  step: number
  numberOfSteps: number
  changeStep?: (step: number) => void
}

const Navigation = ({ step, numberOfSteps, changeStep }: props) => {
  return (
    <>
      <div className="max-w-lg w-full flex flex-row padding-top justify-around pt-12">
        {step !== 0 && <Button onClick={() => changeStep(-1)}>Tilbake</Button>}

        {step < numberOfSteps - 1 ? (
          <Button>Neste</Button>
        ) : (
          <Button>Send til Bankom</Button>
        )}
      </div>
      <ProgressBar
        currentStep={step}
        numberOfSteps={numberOfSteps}
        changeStep={changeStep}
      />
    </>
  )
}

export default Navigation
