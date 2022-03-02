import { UseFormRegister } from 'react-hook-form'
import { ERROR_MSG_STYLE, LABEL_STYLE } from './styles'

export interface IDropdownOption {
  value: string
  label: string
}

type props = {
  defaultOption: IDropdownOption
  options: IDropdownOption[]
  label: string
  name: string
  classNames?: string
  errors?: string
  register: UseFormRegister<any>
}

const Dropdown = ({
  defaultOption,
  options,
  label,
  name,
  errors,
  register,
}: props) => {
  return (
    <div className="w-full text-left">
      <label className={LABEL_STYLE}>{label}</label>
      <div className="relative inline-flex pb-3 w-full">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fillRule="nonzero"
          />
        </svg>
        <select
          className={`border ${
            errors ? 'border-red-500' : 'border-gray-500'
          } rounded text-gray-700 border shadow h-10 bg-white focus:outline-none appearance-none w-full`}
          {...register(name)}
          defaultValue={defaultOption.value}
        >
          <option disabled value={defaultOption.value}>
            {defaultOption.label}
          </option>
          {options.map((option, index) => (
            <option key={`opt-${index}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errors && <p className={ERROR_MSG_STYLE}>{errors}</p>}
    </div>
  )
}

export default Dropdown
