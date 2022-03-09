import Button from '../elements/Button'
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
        {step !== 0 && (
          <Button pri={'primary'} onClick={() => changeStep(-1)}>
            {'Tilbake'}
          </Button>
        )}

        {step < numberOfSteps - 1 ? (
          <Button
            pri={'primary'}
            className="bg-transparent hover:bg-online-blue-500 text-online-blue-500 font-semibold hover:text-white py-2 px-4 border border-online-blue-500 hover:border-transparent rounded-full"
          >
            {'Neste'}
          </Button>
        ) : (
          <Button
            pri={'primary'}
            className="bg-transparent hover:bg-online-blue-500 text-online-blue-500 font-semibold hover:text-white py-2 px-4 border border-online-blue-500 hover:border-transparent rounded-full"
          >
            {'Send til Bankom'}
          </Button>
        )}
      </div>
      <ProgressBar currentStep={step} numberOfSteps={numberOfSteps} />
    </>
  )
}

export default Navigation
