import Label from 'components/html/form/label'
import Error from 'components/html/form/error'
import { INPUT_STYLE } from 'lib/styles'
import { UseFormRegister } from 'react-hook-form'

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
      <Label className={`flex flex-col w-full text-left`}>
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
      </Label>
      <Error error={error} />
    </div>
  )
}

export default TextArea
