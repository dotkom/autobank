import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'components/html/form/Input'
import { CompanyUserSchema } from 'lib/validation/CompanyUser'
import { FormProps, InvoiceFormData } from 'types/forms'
import Form from 'components/html/form/form'

const CompanyUserForm = ({
  data,
  setData,
  navigation,
}: FormProps<InvoiceFormData>) => {
  const submitForm = (values) => {
    setData({ ...data, ...values })
  }
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(CompanyUserSchema),
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
      navigation={navigation}
      onSubmit={handleSubmit(submitForm)}
      saveStep={saveStep}
    >
      <Input
        name="name"
        type="text"
        label="Navn"
        placeholder="Ola Nordperson"
        error={errors.name?.message}
        register={register}
      />
      <Input
        name="email"
        type="text"
        label="E-post"
        placeholder="olanordperson@bedrift.no"
        error={errors.email?.message}
        register={register}
      />
      <Input
        name="phone"
        type="text"
        label="Telefonnummer"
        placeholder="+47 972 24 420"
        error={errors.phone?.message}
        register={register}
      />
    </Form>
  )
}

export default CompanyUserForm
