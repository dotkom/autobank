import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Navigation from '../../Navigation'
import { FORM_STYLE } from '../../styles'
import { ICompanyInformation } from '../state'
import { CompanyInfoValidationSchema } from '../validation/CompanyInformationValidation'

type props = {
  changeStep: (step: number) => void
  initialData: ICompanyInformation
  setFormData: Dispatch<SetStateAction<ICompanyInformation>>
}

const CompanyInformation = ({
  changeStep,
  initialData,
  setFormData,
}: props) => {
  const submitForm = (data: ICompanyInformation) => {
    setFormData(data)
    changeStep(1)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CompanyInfoValidationSchema),
    defaultValues: initialData,
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
    </form>
  )
}

export default CompanyInformation
