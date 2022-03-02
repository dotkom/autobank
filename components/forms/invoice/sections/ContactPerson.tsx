import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactPersonValidationSchema } from '../validation/ContactPersonValidation'
import { FORM_STYLE } from '../../styles'
import InputField from '../../InputField'
import Navigation from '../../receipt/Navigation'

const ContactPerson = () => {
  const submitForm = (data: any) => {
    console.log('Submitted contact person section')
    console.log(data)
    // setFormData(data)
    // changeStep(1)
  }

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactPersonValidationSchema),
    // defaultValues: initialData,
  })

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
      <Navigation step={1} />
    </form>
  )
}

export default ContactPerson
