import Button from 'src/components/html/Button'
import ProgressBar from './ProgressBar'

type props = {
  step: number
  setStep: (step: number) => void
  numberOfSteps: number
  submitForm: () => void
}

const Navigation = ({ step, setStep, numberOfSteps, submitForm }: props) => {
  return (
    <>
      <div className="max-w-lg w-full flex flex-row padding-top justify-around pt-10">
        {step !== 0 && (
          <Button onClick={() => setStep(step - 1)}>Tilbake</Button>
        )}

        {step < numberOfSteps - 1 ? (
          <Button onClick={() => setStep(step + 1)}>Neste</Button>
        ) : (
          <Button onClick={() => submitForm()}>Send til Bankom</Button>
        )}
      </div>
      <ProgressBar {...{ step, numberOfSteps, setStep }} />
    </>
  )
}

export default Navigation
