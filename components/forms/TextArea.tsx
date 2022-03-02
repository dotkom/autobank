import { UseFormRegister } from 'react-hook-form'
import { ERROR_MSG_STYLE, INPUT_STYLE, LABEL_STYLE } from './styles'

type Props = {
  name: string
  label: string
  placeholder: string
  error?: string
  register: UseFormRegister<any>
}

const TextArea = ({ name, label, placeholder, error, register }: Props) => {
  return (
    <div className="w-full text-left">
      <label className={`${LABEL_STYLE} flex flex-col w-full text-left`}>
        {label}
        <textarea
          name={name}
          rows={4}
          {...register(name)}
          placeholder={placeholder}
          className={
            'h-20 ' + INPUT_STYLE + (error ? 'border border-red-500' : '')
          }
        ></textarea>
      </label>
      {error && <p className={ERROR_MSG_STYLE}>{error}</p>}
    </div>
  )
}

export default TextArea
