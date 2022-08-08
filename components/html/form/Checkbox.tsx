import { UseFormRegister } from 'react-hook-form'
import Error from './error'
import Label from './label'

type props = {
  label: string
  name: string
  error?: string
  register: UseFormRegister<any>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Checkbox = ({ label, name, error, register, ...props }: props) => {
  return (
    <>
      <Label className={' mt-4 text-base'}>
        <input
          type="checkbox"
          name={name}
          className={
            'form-checkbox h-5 w-5 mr-1 text-online-blue-500 hover:cursor-pointer hover:border-online-blue-500 hover:border-2'
          }
          {...register(name)}
          {...props}
        />
        {label}
      </Label>
      <Error error={error} />
    </>
  )
}

export default Checkbox
