import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactPersonValidationSchema } from '../validation/ContactPersonValidation'
import { FORM_STYLE } from '../../styles'
import InputField from '../../InputField'
import Navigation from '../../Navigation'
import { IContactPerson } from '../state'
import { Dispatch, SetStateAction } from 'react'

type props = {
  changeStep: (step: number) => void
  initialData: IContactPerson
  setFormData: Dispatch<SetStateAction<IContactPerson>>
}

const ContactPerson = ({ changeStep, initialData, setFormData }: props) => {
  const submitForm = (data: IContactPerson) => {
    setFormData(data)
    changeStep(1)
  }

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactPersonValidationSchema),
    defaultValues: initialData,
  })

  const handlePrevStep = (delta: number) => {
    setFormData(getValues())
    changeStep(delta)
  }

  return (
    <form className={FORM_STYLE} onSubmit={handleSubmit(submitForm)}>
      <InputField
        name="name"
        type="text"
        label="Navn"
        placeholder="Ola Nordperson"
        error={errors.name?.message}
        register={register}
      />
      <InputField
        name="email"
        type="text"
        label="E-post"
        placeholder="olanordperson@bedrift.no"
        error={errors.email?.message}
        register={register}
      />
      <InputField
        name="phone"
        type="text"
        label="Telefonnummer"
        placeholder="+47 972 24 420"
        error={errors.phone?.message}
        register={register}
      />
      <Navigation step={1} numberOfSteps={3} changeStep={handlePrevStep} />
    </form>
  )
}

export default ContactPerson
