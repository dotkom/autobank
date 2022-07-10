import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

import Input from 'components/html/form/Input'
import { ReceiptSchema } from 'lib/validation/Receipt'
import { FormProps, ReceiptFormData } from 'types/forms'
import Form from 'components/html/form/form'
import AccountInput from 'components/html/form/custom/AccountInput'
import GroupDropdown from 'components/html/form/custom/GroupDropdown'
import ReciptTypeGroup from 'components/html/form/custom/ReciptTypeGroup'

const ReciptForm = ({
  data,
  setData,
  navigation,
}: FormProps<ReceiptFormData>) => {
  const [type, setType] = useState<'card' | 'deposit'>(data.type)

  const submitForm = (values) => {
    console.log(values)

    setData({ ...data, ...values, type })
  }

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(ReceiptSchema),
    defaultValues: data,
  })

  const changeType = (type: 'card' | 'deposit') => {
    if (type === 'card') {
      setValue('account', 'unused')
      setValue('card', null)
    } else {
      setValue('card', 'unused')
      setValue('account', null)
    }
    setType(type)
  }

  const saveStep = () => {
    submitForm({ ...getValues(), amount: parseInt('' + getValues().amount) })

    if (isValid && !isValidating) {
      return true
    }
    return false
  }

  return (
    <Form
      navigation={navigation}
      onSubmit={handleSubmit(submitForm)}
      saveStep={saveStep}
    >
      <ReciptTypeGroup register={register} changeType={changeType} />
      {type == 'deposit' ? (
        <AccountInput register={register} errors={errors.account?.message} />
      ) : (
        <Input
          name="card"
          type="text"
          label="Kortinformasjon"
          placeholder="Kortinformasjon/Hvilken komite kortet tilhører"
          error={errors.card?.message}
          register={register}
        />
      )}
      <div className="flex flex-row justify-between w-full mb-3">
        <div className="w-1/3">
          <Input
            name="amount"
            type="number"
            label="Beløp"
            placeholder="Beløpet i kr"
            error={errors.amount?.message}
            register={register}
          />
        </div>
        <GroupDropdown
          register={register}
          errors={errors.responsible_unit?.message}
        />
      </div>
      <Input
        name="occasion"
        type="text"
        label="Anledning"
        placeholder="Grunnlag for kjøpet"
        error={errors.occasion?.message}
        register={register}
      />
    </Form>
  )
}

export default ReciptForm
