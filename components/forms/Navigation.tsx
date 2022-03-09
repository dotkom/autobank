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
          <button
            onClick={() => changeStep(-1)}
            className="bg-transparent hover:bg-online-blue-500 text-online-blue-500 font-semibold hover:text-white py-2 px-4 border border-online-blue-500 hover:border-transparent rounded-full"
          >
            Tilbake
          </button>
        )}

        {step < numberOfSteps - 1 ? (
          <button className="bg-transparent hover:bg-online-blue-500 text-online-blue-500 font-semibold hover:text-white py-2 px-4 border border-online-blue-500 hover:border-transparent rounded-full">
            Neste
          </button>
        ) : (
          <button className="bg-transparent hover:bg-online-blue-500 text-online-blue-500 font-semibold hover:text-white py-2 px-4 border border-online-blue-500 hover:border-transparent rounded-full">
            Send til Bankom
          </button>
        )}
      </div>
      <ProgressBar currentStep={step} numberOfSteps={numberOfSteps} />
    </>
  )
}

export default Navigation
