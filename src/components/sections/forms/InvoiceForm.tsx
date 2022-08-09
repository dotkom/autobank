import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Dropdown, {
  DropdownOption,
} from 'src/components/html/form/custom/Dropdown'
import Checkbox from 'src/components/html/form/Checkbox'
import { InvoiceSchema } from 'src/lib/validation/Invoice'
import { useState } from 'react'
import { FormProps, InvoiceFormData } from 'src/lib/types/forms'
import Input from 'src/components/html/form/Input'
import Form from 'src/components/html/form/form'
import TextArea from 'src/components/html/form/TextArea'
export const INNVOICE_DELIVERY_OPTIONS: DropdownOption[] = [
  { value: 'ehf', label: 'EHF' },
  { value: 'epost', label: 'E-post' },
  { value: 'adresse', label: 'Brev' },
]

export const INNVOICE_OCCASIONS: DropdownOption[] = [
  { value: 'bedpres', label: 'Bedriftspresentasjon' },
  { value: 'kurs', label: 'Kurs' },
  { value: 'offline', label: 'Annonse i Offline' },
  { value: 'online_ad', label: 'Stillingsutlysning' },
  { value: 'techtalks', label: 'Tech Talks' },
  { value: 'excursion', label: 'IT-ekskursjonen' },
  { value: 'other', label: 'Annet' },
]

const InvoiceForm = ({
  data,
  setData,
  navigation,
}: FormProps<InvoiceFormData>) => {
  const [isPoNumber, setIsPoNumber] = useState<boolean>(data.isPoNumber)
  const [isDueDate, setIsDueDate] = useState<boolean>(data.isDueDate)
  const [deliveryMethod, setDeliveryMethod] = useState<String>(data.delivery)

  const submitForm = (values) => {
    setData({ ...data, ...values })
  }

  const {
    handleSubmit,
    register,
    clearErrors,
    getValues,
    setValue,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(InvoiceSchema),
    defaultValues: data,
  })
  const saveStep = () => {
    submitForm(getValues())

    if (isValid && !isValidating) {
      return true
    }
    return false
  }

  return (
    <Form
      className=" items-start"
      navigation={navigation}
      onSubmit={handleSubmit(submitForm)}
      saveStep={saveStep}
    >
      <Dropdown
        defaultOption={{ value: 'default', label: 'Anledning' }}
        options={INNVOICE_OCCASIONS}
        label="Anledning"
        name="occasion"
        onChange={(_) => clearErrors('occasion')}
        errors={errors.occasion?.message}
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
        <Input
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
        <Input
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
        <Input
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
    </Form>
  )
}

export default InvoiceForm
