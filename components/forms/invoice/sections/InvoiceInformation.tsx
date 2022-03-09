import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InvoiceInformationValidationSchema } from '../validation/InvoiceInformationValidation'
import { FORM_STYLE } from '../../styles'
import InputField from '../../InputField'
import Dropdown from '../../Dropdown'
import { INNVOICE_OCCATIONS } from '../invoiceOccations'
import { INNVOICE_DELIVERY_OPTIONS } from '../invoiceDeliveryOptions'
import Checkbox from '../../Checkbox'
import { Dispatch, SetStateAction, useState } from 'react'
import Navigation from '../../receipt/Navigation'
import TextArea from '../../TextArea'
import { IInvoiceInformation } from '../state'

type props = {
  changeStep: (step: number) => void
  initialData: IInvoiceInformation
  setFormData: Dispatch<SetStateAction<IInvoiceInformation>>
  submitInvoiceForm: (data: IInvoiceInformation) => void
}

const InvoiceInformation = ({
  changeStep,
  initialData,
  setFormData,
  submitInvoiceForm,
}: props) => {
  const [isPoNumber, setIsPoNumber] = useState<boolean>(initialData.isPoNumber)
  const [isDueDate, setIsDueDate] = useState<boolean>(initialData.isDueDate)
  const [deliveryMethod, setDeliveryMethod] = useState<String>(
    initialData.delivery
  )

  const submitForm = (data: IInvoiceInformation) => {
    submitInvoiceForm(data as IInvoiceInformation)
  }

  const {
    handleSubmit,
    register,
    clearErrors,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InvoiceInformationValidationSchema),
    defaultValues: initialData,
  })

  const handlePrevStep = (delta: number) => {
    setFormData(getValues())
    changeStep(delta)
  }

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
        onChange={(_) => clearErrors('occation')}
        errors={errors.occation?.message}
        register={register}
      />
      <Dropdown
        defaultOption={{ value: 'default', label: 'Leveringsmetode' }}
        options={INNVOICE_DELIVERY_OPTIONS}
        label="Leveringsmetode"
        name="delivery"
        onChange={(e) => {
          clearErrors('delivery')
          setDeliveryMethod(e.target.value)
        }}
        errors={errors.delivery?.message}
        register={register}
      />
      {deliveryMethod != 'default' && deliveryMethod != 'ehf' ? (
        <InputField
          name="deliveryAdress"
          type="text"
          label={deliveryMethod == 'adresse' ? 'Adresse' : 'E-post'}
          placeholder={
            deliveryMethod == 'adresse' ? 'Ønsket adresse' : 'Ønsket e-post'
          }
          error={errors.deliveryAdress?.message}
          register={register}
        />
      ) : null}
      <Checkbox
        label="Ønsker PO-nummer"
        name="isPoNumber"
        register={register}
        defaultChecked={isPoNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue('isPoNumber', e.target.checked)
          setIsPoNumber(e.target.checked)
        }}
      />
      {isPoNumber ? (
        <InputField
          name="poNumber"
          type="text"
          label="" //TODO: Make label optional?
          placeholder="PO-nummer"
          error={errors.poNumber?.message}
          register={register}
        />
      ) : null}
      <Checkbox
        label="Ønsker spesielt antall dager til forfallsdato"
        name="isDueDate"
        register={register}
        defaultChecked={isDueDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue('isDueDate', e.target.checked)
          setIsDueDate(e.target.checked)
        }}
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
      <Navigation step={2} changeStep={handlePrevStep} />
    </form>
  )
}

export default InvoiceInformation
