import Label from 'components/html/form/label'
import Error from 'components/html/form/error'
import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { INPUT_STYLE } from 'lib/styles'
import { ReceiptFormData } from 'types/forms'

// Formats the value onto this "bankaccount format": xxxx xx xxxxx
const FORMAT_ACCOUNT_VALUE = (value: string): string => {
  const chars = value.replace(/\D/g, '').split('')
  let insertedSpace = ''
  for (let i = 0; i < chars.length; i++) {
    if (i >= 11) {
      break
    } else if (i === 4 || i === 6) {
      insertedSpace += ' '
    }
    const char = chars[i]
    insertedSpace += char
  }
  return insertedSpace
}

type props = {
  classNames?: string
  errors?: string
  register: UseFormRegister<ReceiptFormData>
}

const AccountInput = ({ classNames, errors, register }: props) => {
  const [account, setAccount] = useState<string>()

  const updateValue = (value: string) => {
    setAccount(FORMAT_ACCOUNT_VALUE(value))
  }

  return (
    <div className="w-full text-left mb-3">
      <Label>
        Kontonummer
        <input
          className={`${classNames} ${
            errors && 'border-red-500'
          } ${INPUT_STYLE}`}
          type="text"
          name="account"
          value={account}
          {...register('account')}
          onChange={(e) => updateValue(e.target.value)}
          placeholder="Kontonummer for tilbakebetaling"
        />
      </Label>
      <Error error={errors} />
    </div>
  )
}

export default AccountInput
