import { ChangeEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'
import Error from '../error'
import Label from '../label'

export type DropdownOption = {
  value: string
  label: string
}

type props = {
  defaultOption: DropdownOption
  options: DropdownOption[]
  label: string
  name: string
  classNames?: string
  errors?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  register: UseFormRegister<any>
}

const Dropdown = ({
  defaultOption,
  options,
  label,
  name,
  errors,
  onChange,
  register,
}: props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className="w-full text-left">
      <Label>{label}</Label>
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
          onChange={handleChange}
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
      <Error error={errors} />
    </div>
  )
}

export default Dropdown
