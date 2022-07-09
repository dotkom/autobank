import Button from 'components/html/Button'
import { Dispatch, SetStateAction } from 'react'
import ProgressBar from './ProgressBar'

type props = {
  step: number
  numberOfSteps: number
  setStep?: Dispatch<SetStateAction<number>>
}

const Navigation = ({ step, numberOfSteps, setStep }: props) => {
  return (
    <>
      <div className="max-w-lg w-full flex flex-row padding-top justify-around pt-10">
        {step !== 0 && (
          <Button onClick={() => setStep(step - 1)}>Tilbake</Button>
        )}

        {step < numberOfSteps - 1 ? (
          <Button onClick={() => setStep(step + 1)}>Neste</Button>
        ) : (
          <Button type="submit">Send til Bankom</Button>
        )}
      </div>
      <ProgressBar {...{ step, numberOfSteps, setStep }} />
    </>
  )
}

export default Navigation
