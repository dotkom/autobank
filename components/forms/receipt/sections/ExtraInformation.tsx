import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Navigation from '../Navigation'
import { ERROR_MSG_STYLE, LABEL_STYLE } from '../../styles'
import { ExtraInformationValidationSchema } from '../validation/ExtraInformationValidation'
import { getDataUrlsFromFiles } from 'utils/getDataUrlsFromFiles'
import { IExtraInformationData } from '../state'

type props = {
  changeStep: (delta: number) => void
  submitReceiptForm: (extraInformationData: IExtraInformationData) => void
}

const ExtraInformation = ({ changeStep, submitReceiptForm }: props) => {
  const submitForm = async (data) => {
    const fileArray: File[] = Array.from(data.attachments)
    const files: string[] = await getDataUrlsFromFiles(fileArray)
    submitReceiptForm({
      comments: data.comments,
      attachments: files,
    })
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ExtraInformationValidationSchema),
  })

  return (
    <form
      className="max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg"
      onSubmit={handleSubmit(submitForm)}
    >
      <label className={`${LABEL_STYLE} flex flex-col w-full text-left`}>
        Kommentarer
        <textarea
          name="comments"
          rows={4}
          {...register('comments')}
          placeholder="Andre kommentarer eller viktig informasjon rundt kjøpet kan skrives her. Hvis det gjelder teambuilding, skriv også inn navn på alle deltakere"
          className={errors.comments?.message ? 'border-red-500' : ''}
        ></textarea>
      </label>
      {errors.comments?.message && (
        <p className={ERROR_MSG_STYLE}>{errors.comments.message}</p>
      )}
      <label className={LABEL_STYLE + ' text-left pt-2'}>
        Vedlegg/Kvittering
        <input
          type="file"
          name="attachments"
          accept="image/png,image/jpeg,image/jpg,application/pdf,.pdf"
          multiple
          className={errors.attachments?.message ? 'border-red-500' : ''}
          {...register('attachments')}
        />
      </label>
      {errors.attachments?.message && (
        <p className={ERROR_MSG_STYLE}>{errors.attachments.message}</p>
      )}
      <Navigation step={2} changeStep={changeStep} />
    </form>
  )
}

export default ExtraInformation
