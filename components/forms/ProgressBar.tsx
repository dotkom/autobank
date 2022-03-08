type props = {
  currentStep: number;
};

const PROGRESS_BAR_STYLE =
  "inline-flex items-center justify-center w-1/3 py-3 font-medium leading-none tracking-wider rounded-t sm:px-6 sm:w-auto sm:justify-start";

const ProgressBar = ({ currentStep }: props) => {
  return (
    <div className="flex flex-wrap mx-auto pt-12 w-full items-center justify-center mb-[-40px]">
      <div
        className={
          PROGRESS_BAR_STYLE +
          `${
            currentStep === 0
              ? "bg-gray-100 text-online-blue-500 border-b-2 border-online-blue-500"
              : "border-b-2 border-gray-200"
          }`
        }
      >
        Steg 1
      </div>
      <div
        className={
          PROGRESS_BAR_STYLE +
          `${
            currentStep === 1
              ? "bg-gray-100 text-online-blue-500 border-b-2 border-online-blue-500"
              : "border-b-2 border-gray-200"
          }`
        }
      >
        Steg 2
      </div>
      <div
        className={
          PROGRESS_BAR_STYLE +
          `${
            currentStep === 2
              ? "bg-gray-100 text-online-blue-500 border-b-2 border-online-blue-500"
              : "border-b-2 border-gray-200"
          }`
        }
      >
        Steg 3
      </div>
    </div>
  );
};

export default ProgressBar;
