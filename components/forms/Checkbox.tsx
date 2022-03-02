import { UseFormRegister } from 'react-hook-form'
import { CHECKBOX_STYLE, ERROR_MSG_STYLE, LABEL_STYLE } from './styles'

type props = {
  label: string
  name: string
  error?: string
  register: UseFormRegister<any>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Checkbox = ({ label, name, error, register, ...props }: props) => {
  return (
    <>
      <label className={LABEL_STYLE + ' mt-4 text-base'}>
        <input
          type="checkbox"
          name={name}
          className={CHECKBOX_STYLE}
          {...register(name)}
          {...props}
        />
        {label}
      </label>
      {error && <p className={ERROR_MSG_STYLE}>{error}</p>}
    </>
  )
}

export default Checkbox
