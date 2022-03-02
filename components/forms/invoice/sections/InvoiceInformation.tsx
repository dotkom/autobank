import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InvoiceInformationValidationSchema } from '../validation/InvoiceInformationValidation'
import { FORM_STYLE } from '../../styles'
import InputField from '../../InputField'
import Dropdown from '../../Dropdown'
import { INNVOICE_OCCATIONS } from '../invoiceOccations'
import { INNVOICE_DELIVERY_OPTIONS } from '../invoiceDeliveryOptions'
import Checkbox from '../../Checkbox'
import { useState } from 'react'
import Navigation from '../../receipt/Navigation'
import TextArea from '../../TextArea'

const InvoiceInformation = () => {
  const [isPoNumber, setIsPoNumber] = useState<boolean>(false)
  const [isDueDate, setIsDueDate] = useState<boolean>(false)

  const submitForm = (data: any) => {
    console.log('Submitted contact person section')
    delete data.poNumber_CB
    delete data.dueDate_CB
    console.log(data)
    // setFormData(data)
    // changeStep(1)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InvoiceInformationValidationSchema),
    // defaultValues: initialData,
  })

  return (
    <form
      className={FORM_STYLE + ' items-start'}
      onSubmit={handleSubmit(submitForm)}
    >
      <Dropdown
        defaultOption={{ value: 'default', label: 'Anledning' }}
        options={INNVOICE_OCCATIONS}
        label="Anledning"
        name="occation"
        errors={errors.occation?.message}
        register={register}
      />
      <Dropdown
        defaultOption={{ value: 'default', label: 'Leveringsmetode' }}
        options={INNVOICE_DELIVERY_OPTIONS}
        label="Leveringsmetode"
        name="delivery"
        errors={errors.delivery?.message}
        register={register}
      />
      <Checkbox
        label="Ønsker PO-nummer"
        name="poNumber_CB"
        register={register}
        defaultChecked={isPoNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIsPoNumber(e.target.checked)
        }
      />
      {isPoNumber ? (
        <InputField
          name="poNumber"
          type="number"
          label="" //TODO: Make label optional?
          placeholder="PO-nummer"
          error={errors.poNumber?.message}
          register={register}
        />
      ) : null}
      <Checkbox
        label="Ønsker spesielt antall dager til forfallsdato"
        name="dueDate_CB"
        register={register}
        defaultChecked={isDueDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIsDueDate(e.target.checked)
        }
      />
      {isDueDate ? (
        <InputField
          name="dueDate"
          type="text"
          label=""
          placeholder="Eks 10 dager"
          error={errors.dueDate?.message}
          register={register}
        />
      ) : null}
      <TextArea
        label="Kommentarer"
        name="comments"
        placeholder="Dersom dere har noen ønsker utover det som er fylt inn ovenfor, vennligst skriv her"
        error={errors.comments?.message}
        register={register}
      />
      <Navigation step={2} />
    </form>
  )
}

export default InvoiceInformation
