import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Input from 'components/html/form/Input'
import { CompanySchema } from 'lib/validation/Company'
import { FormProps, InvoiceFormData } from 'types/forms'
import Form from 'components/html/form/form'

const CompanyForm = ({
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
    formState: { errors, isValid, isValidating },
    getValues,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(CompanySchema),
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
        name="organizationNumber"
        type="number"
        label="Organisasjonsnummer"
        placeholder="123456789"
        error={errors.organizationNumber?.message}
        register={register}
      />
      <Input
        name="companyName"
        type="text"
        label="Bedriftsnavn"
        placeholder="Bedrift AS"
        error={errors.companyName?.message}
        register={register}
      />
    </Form>
  )
}

export default CompanyForm
