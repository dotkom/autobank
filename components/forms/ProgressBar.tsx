type props = {
  currentStep: number
  numberOfSteps: number

  changeStep?: (step: number) => void
}

const PROGRESS_BAR_STYLE =
  'inline-flex items-center justify-center w-1/3 py-3 font-medium leading-none tracking-wider rounded-t sm:px-6 sm:w-auto sm:justify-start'

const ProgressBar = ({ currentStep, numberOfSteps, changeStep }: props) => {
  return (
    <div className="flex flex-wrap mx-auto pt-12 w-full items-center justify-center mb-[-40px]">
      {Array.from(Array(numberOfSteps).keys()).map((number) => (
        <div
          onClick={() => changeStep(number)}
          key={`step-${number + 1}`}
          className={
            PROGRESS_BAR_STYLE +
            `${
              currentStep === number
                ? 'bg-gray-100 text-online-orange-500 border-b-2 border-online-orange-500'
                : 'border-b-2 border-gray-200'
            }`
          }
        >
          {`Steg ${number + 1}`}
        </div>
      ))}
    </div>
  )
}

export default ProgressBar
