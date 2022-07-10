import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { FormProps, ReceiptFormData } from 'types/forms'
import { UserSchema } from 'lib/validation/User'
import Input from 'components/html/form/Input'
import Form from 'components/html/form/form'
import Error from 'components/html/form/error'
import Label from 'components/html/form/label'
import Button from 'components/html/Button'
import { useSession } from 'next-auth/react'

const UserForm = ({
  data,
  setData,
  navigation,
}: FormProps<ReceiptFormData>) => {
  const { data: session, status } = useSession()
  const submitForm = (values) => {
    setData({ ...data, ...values })
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating },
    setValue,
    getValues,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(UserSchema),
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
      {status === 'authenticated' && (
        <div>
          <Button
            className="mt-5"
            onClick={() => {
              setValue('fullname', session.user.name)
              setValue('email', session.user.email)
              setData({ ...data, userid: session.user.id })
            }}
          >
            Bruk brukerdataen min
          </Button>
        </div>
      )}
      <Input
        name="fullname"
        type="text"
        label="Navn"
        placeholder="Ditt fulle navn"
        error={errors.fullname?.message}
        register={register}
      />
      <Input
        name="email"
        type="email"
        label="E-post"
        placeholder="Din e-postadresse. Onlinemail hvis du har."
        error={errors.email?.message}
        register={register}
      />
      <Label className={' mt-4'}>
        <input
          type="checkbox"
          name="toc"
          {...register('toc')}
          className="form-checkbox h-5 w-5 mr-1 text-online-blue-500 hover:cursor-pointer hover:border-online-blue-500 hover:border-2"
        />
        <Link href="/terms-of-service">
          <a target="_blank">Aksepterer TOC</a>
        </Link>
      </Label>
      {errors.toc?.message && <Error error={errors.toc.message} />}
    </Form>
  )
}

export default UserForm
