import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import Public from 'components/Layout/Public'
import { Prisma } from '@prisma/client'
import { useSession } from 'next-auth/react'
import Navigation from 'components/forms/Navigation'
import { receiptDataType } from 'components/forms/receipt/types'
import InputField from 'components/forms/Input'
import { useForm } from 'react-hook-form'
import { ReceiptValidationSchema } from 'lib/yup/receipt'
import { ERROR_MSG_STYLE, LABEL_STYLE } from 'components/forms/styles'
import Link from 'next/link'
import ReciptTypeGroup from 'components/forms/receipt/ReciptTypeGroup'
import AccountInput from 'components/forms/receipt/AccountInput'
import GroupDropdown from 'components/forms/receipt/GroupDropdown'
import TextArea from 'components/forms/TextArea'
import { getDataUrlsFromFiles } from 'utils/getDataUrlsFromFiles'

const initialData: receiptDataType = {
  fullname: '',
  email: '',
  toc: false,
  amount: null,
  occasion: '',
  type: 'deposit',
  account_nr: '',
  card: 'unused',
  responsible_unit: 'default',
  comments: '',
  attachments: [],
}

export default function ReciptForm() {
  const { data: session, status } = useSession()
  const [step, setStep] = useState<number>(0)
  const [type, setType] = useState<'card' | 'deposit'>(initialData.type)
  const changeType = (type: 'card' | 'deposit') => {
    if (type === 'card') {
      setValue('account_nr', 'unused')
      setValue('card', null)
    } else {
      setValue('card', 'unused')
      setValue('account_nr', null)
    }
    setType(type)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(ReceiptValidationSchema),
    defaultValues: initialData,
  })

  const submitForm = async (formData: receiptDataType) => {
    const fileArray: File[] = Array.from(formData.attachments)
    const files: string[] = await getDataUrlsFromFiles(fileArray)
    let data: Prisma.ReceiptCreateInput = {
      type: formData.type,
      amount: formData.amount,
      occasion: formData.occasion,
      appendix: files,
      application: {
        create: { full_name: formData.fullname, email: formData.email },
      },
    }
    if (formData.type == 'card') {
      data.account_nr = parseInt(formData.account_nr)
    } else {
      card: formData.card
    }
    console.log(data)

    // prisma.receipt.create({ data })
  }
  let seen = []

  useEffect(() => {
    if (status == 'authenticated' && session && session.user) {
      setValue('fullname', session.user.name)
      setValue('email', session.user.email)
    }
  }, [status])

  return (
    <Public title="Kvittering">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Kvitteringsskjema</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          {step === 0 && (
            <>
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
              <label className={LABEL_STYLE + ' mt-4'}>
                <input
                  type="checkbox"
                  name="toc"
                  {...register('toc')}
                  className="form-checkbox h-5 w-5 mr-1 text-online-blue-500 hover:cursor-pointer hover:border-online-blue-500 hover:border-2"
                />
                <Link href="/terms-of-service">
                  <a target="_blank">Aksepterer TOC</a>
                </Link>
              </label>
              {errors.toc?.message && (
                <p className={ERROR_MSG_STYLE}>{errors.toc.message}</p>
              )}
            </>
          )}
          {step === 1 && (
            <>
              <ReciptTypeGroup register={register} changeType={changeType} />
              {type == 'deposit' ? (
                <AccountInput
                  register={register}
                  errors={errors.account_nr?.message}
                />
              ) : (
                <InputField
                  name="card"
                  type="text"
                  label="Kortinformasjon"
                  placeholder="Kortinformasjon/Hvilken komite kortet tilhører"
                  error={errors.card?.message}
                  register={register}
                />
              )}
              <div className="flex flex-row justify-between w-full mb-3">
                <div className="w-1/3">
                  <InputField
                    name="amount"
                    type="number"
                    label="Beløp"
                    placeholder="Beløpet i kr"
                    error={errors.amount?.message}
                    register={register}
                  />
                </div>
                <GroupDropdown
                  register={register}
                  errors={errors.responsible_unit?.message}
                />
              </div>
              <InputField
                name="occasion"
                type="text"
                label="Anledning"
                placeholder="Grunnlag for kjøpet"
                error={errors.occasion?.message}
                register={register}
              />
            </>
          )}
          {step === 2 && (
            <>
              <TextArea
                label="Kommentar"
                name="comments"
                placeholder="Andre kommentarer eller viktig informasjon rundt kjøpet kan skrives her. Hvis det gjelder teambuilding, skriv også inn navn på alle deltakere"
                error={errors.comments?.message}
                register={register}
              />
              <label className={LABEL_STYLE + ' text-left pt-2'}>
                Vedlegg/Kvittering
                <input
                  type="file"
                  name="attachments"
                  accept="image/png,image/jpeg,image/jpg,application/pdf,.pdf"
                  multiple
                  className={
                    errors.attachments?.length != 0 ? 'border-red-500' : ''
                  }
                  {...register('attachments')}
                />
              </label>
              {errors.attachments?.length != 0 && (
                <p className={ERROR_MSG_STYLE}>hei</p>
              )}
            </>
          )}
          <Navigation numberOfSteps={3} {...{ setStep, step }} />
        </form>

        {JSON.stringify(
          errors,
          function (key, val) {
            if (val != null && typeof val == 'object') {
              if (seen.indexOf(val) >= 0) {
                return
              }
              seen.push(val)
            }
            return val
          },
          2
        )}
      </div>
    </Public>
  )
}
