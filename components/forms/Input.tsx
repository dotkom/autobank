import { FieldValues, UseFormRegister } from 'react-hook-form'
import { ERROR_MSG_STYLE, INPUT_STYLE, LABEL_STYLE } from '../elements/styles'

type props = {
  value?: string
  label?: string
  error?: string
  register?: UseFormRegister<any>
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>

// if you are using react-hook-form, the dont pass a value!!!

const InputField = ({
  value,
  label,
  name,
  error,
  className,
  register,
  ...props
}: props) => {
  return (
    <div className="w-full text-left mb-3">
      <label className={LABEL_STYLE}>
        {label}
        {value || value == '' ? (
          <input
            className={`${className} ${
              error && 'border-red-500'
            } ${INPUT_STYLE}`}
            name={name}
            value={value}
            {...props}
          />
        ) : (
          <input
            className={`${className} ${
              error && 'border-red-500'
            } ${INPUT_STYLE}`}
            name={name}
            {...register(name)}
            {...props}
          />
        )}
      </label>
      {error && <p className={ERROR_MSG_STYLE}>{error}</p>}
    </div>
  )
}

export default InputField
