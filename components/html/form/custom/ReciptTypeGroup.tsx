import Label from 'components/html/form/label'
import Error from 'components/html/form/error'
import { UseFormRegister } from 'react-hook-form'
import { ReceiptFormData } from 'types/forms'

type props = {
  error?: string
  register: UseFormRegister<ReceiptFormData>
  changeType: (type: string) => void
}

const ReciptTypeGroup = ({ error, register, changeType }: props) => {
  return (
    <div
      className={`w-full flex flex-row justify-around pb-5 ${
        error && 'border-red-500'
      }`}
    >
      <div className="flex flex-col">
        <Label className={' hover:cursor-pointer'}>
          <input
            type="radio"
            name="type"
            value="deposit"
            className="form-radio h-5 w-5 mr-1 mb-1 form-checkbox text-online-blue-500 hover:border-online-blue-500 hover:border-2"
            onClick={() => changeType('deposit')}
            {...register('type')}
          />
          Utlegg
        </Label>
        <p className="text-xs text-gray-500">
          Hvis du har lagt ut med ditt eget kort
        </p>
      </div>
      <div className="flex flex-col">
        <Label className={' hover:cursor-pointer'}>
          <input
            type="radio"
            name="type"
            value="card"
            className="form-radio h-5 w-5 mr-1 mb-1 form-checkbox text-online-blue-500 hover:border-online-blue-500 hover:border-2"
            onClick={() => changeType('card')}
            {...register('type')}
          />
          Bankkort
        </Label>
        <p className="text-xs text-gray-500">
          Hvis du har betalt for noe med ett av Online sine kort
        </p>
      </div>
      {error && <Error error={error} />}
    </div>
  )
}

export default ReciptTypeGroup
