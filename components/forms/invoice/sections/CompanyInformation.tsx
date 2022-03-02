import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Navigation from '../../receipt/Navigation'
import { FORM_STYLE } from '../../styles'
import { CompanyInfoValidationSchema } from '../validation/CompanyInformationValidation'

const CompanyInformation = () => {
  const submitForm = (data: any) => {
    console.log('Submitted company information section')
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
    resolver: yupResolver(CompanyInfoValidationSchema),
    // defaultValues: initialData,
  })

  return (
    <form className={FORM_STYLE} onSubmit={handleSubmit(submitForm)}>
      <InputField
        name="organizationNumber"
        type="number"
        label="Organisasjonsnummer"
        placeholder="123456789"
        error={errors.organizationNumber?.message}
        register={register}
      />
      <InputField
        name="companyName"
        type="text"
        label="Bedriftsnavn"
        placeholder="Bedrift AS"
        error={errors.companyName?.message}
        register={register}
      />
      <Navigation step={0} />
    </form>
  )
}

export default CompanyInformation
