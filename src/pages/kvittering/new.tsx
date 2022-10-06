import { useState } from 'react'

import Public from 'src/components/Layout/Public'
import { ReceiptFormData } from 'src/lib/types/forms'
import UserForm from 'src/components/sections/forms/UserForm'
import ExtraForm from 'src/components/sections/forms/ExtraForm'
import ReciptForm from 'src/components/sections/forms/ReciptForm'

import FullPageLoader from 'src/components/sections/FullPageLoader'

import Button from 'src/components/html/Button'
import { trpc } from '~/utils/trpc'
import { useRouter } from 'next/router'

const initialData: ReceiptFormData = {
  fullname: '',
  email: '',
  toc: false,
  amount: 0,
  occasion: '',
  type: 'deposit',
  account: '',
  card: 'unused',
  responsible_committee: 'default',
  comments: '',
  appendix: [],
}

export default function Recipt() {
  const router = useRouter()
  const [step, setStep] = useState<number>(0)
  const [formData, setFormData] = useState<ReceiptFormData>(initialData)
  const createReceipt = trpc.useMutation('application.receipt.add', {
    onSuccess: () => {
      router.push('/kvittering/success')
    },
  })

  const submitForm = async () => {
    const data: any = {
      amount: formData.amount,
      occasion: formData.occasion,
      type: formData.type,
      appendix: formData.appendix,
      application: {
        create: {
          fullname: formData.fullname,
          email: formData.email,
          user: formData.userid
            ? {
                connect: {
                  id: formData.userid,
                },
              }
            : null,
          responsible_committee: formData.responsible_committee,
          comments: formData.comments,
        },
      },
    }
    if (formData.type === 'deposit') {
      data.account = formData.account
    } else {
      data.card = formData.card
    }

    await createReceipt.mutate(data)
  }

  if (createReceipt.isLoading)
    return (
      <Public title="Kvittering">
        <FullPageLoader />
      </Public>
    )
  if (createReceipt.error)
    return (
      <Public title="Kvittering">
        {`Submission error! ${createReceipt.error.message}`}
        <Button onClick={() => submitForm()}>Send på nytt</Button>
      </Public>
    )

  return (
    <Public title="Kvittering">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Kvitteringsskjema</h1>
        {step === 0 && (
          <UserForm
            data={formData}
            setData={setFormData}
            navigation={{ setStep, step, numberOfSteps: 3, submitForm }}
          />
        )}
        {step === 1 && (
          <ReciptForm
            data={formData}
            setData={setFormData}
            navigation={{ setStep, step, numberOfSteps: 3, submitForm }}
          />
        )}
        {step === 2 && (
          <ExtraForm
            data={formData}
            setData={setFormData}
            navigation={{ setStep, step, numberOfSteps: 3, submitForm }}
          />
        )}
      </div>
      {JSON.stringify(formData, null, 2)}
    </Public>
  )
}
