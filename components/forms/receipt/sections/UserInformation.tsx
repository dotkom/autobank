import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Navigation from '../Navigation'
import InputField from '../../InputField'
import { UserInformationValidationSchema } from '../validation/UserInformationValidation'
import { Dispatch, SetStateAction } from 'react'
import { ERROR_MSG_STYLE, FORM_STYLE, LABEL_STYLE } from '../../styles'
import { IUserData } from '../state'
import Checkbox from '../../Checkbox'

type props = {
  changeStep: (step: number) => void
  setFormData: Dispatch<SetStateAction<IUserData>>
  initialData: IUserData
}

const UserInformation = ({ changeStep, setFormData, initialData }: props) => {
  const submitForm = (data: IUserData) => {
    setFormData(data)
    changeStep(1)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserInformationValidationSchema),
    defaultValues: initialData,
  })

  return (
    <form className={FORM_STYLE} onSubmit={handleSubmit(submitForm)}>
      <InputField
        name="fullname"
        type="text"
        label="Navn"
        placeholder="Ditt fulle navn"
        error={errors.fullname?.message}
        register={register}
      />
      <InputField
        name="email"
        type="email"
        label="E-post"
        placeholder="Din e-postadresse. Onlinemail hvis du har."
        error={errors.email?.message}
        register={register}
      />
      <Checkbox
        label="Aksepterer TOC"
        name="toc"
        error={errors.toc?.message}
        register={register}
      />
      <Navigation step={0} />
    </form>
  )
}

export default UserInformation
