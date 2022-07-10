import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { getDataUrlsFromFiles } from '../../../utils/getDataUrlsFromFiles'
import TextArea from '../../html/form/TextArea'
import { FormProps, ReceiptFormData } from 'types/forms'
import { ExtraSchema } from 'lib/validation/Extra'
import Form from 'components/html/form/form'
import Error from 'components/html/form/error'
import Label from 'components/html/form/label'

const ExtraForm = ({
  data,
  setData,
  navigation,
}: FormProps<ReceiptFormData>) => {
  const submitForm = async (data) => {
    const fileArray: File[] = Array.from(data.attachments)
    const files: string[] = await getDataUrlsFromFiles(fileArray)
    setData({
      ...data,
      ...{
        comments: data.comments,
        attachments: files,
      },
    })
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating },
    getValues,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(ExtraSchema),
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
      <TextArea
        label="Kommentar"
        name="comments"
        placeholder="Andre kommentarer eller viktig informasjon rundt kjøpet kan skrives her. Hvis det gjelder teambuilding, skriv også inn navn på alle deltakere"
        error={errors.comments?.message}
        register={register}
      />
      <Label className={' text-left pt-2'}>
        Vedlegg/Kvittering
        <input
          type="file"
          name="attachments"
          accept="image/png,image/jpeg,image/jpg,application/pdf,.pdf"
          multiple
          className={errors.attachments?.length != 0 ? 'border-red-500' : ''}
          {...register('attachments')}
        />
      </Label>
      {/* {errors.attachments?.length != 0 && (
        <Error error={errors.attachments.join(', ')} /> //TODO: fix ewrror display
      )} */}
    </Form>
  )
}

export default ExtraForm
