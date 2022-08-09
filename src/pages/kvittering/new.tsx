import { useState } from 'react'

import Public from 'src/components/Layout/Public'
import { ReceiptFormData } from 'src/lib/types/forms'
import UserForm from 'src/components/sections/forms/UserForm'
import ExtraForm from 'src/components/sections/forms/ExtraForm'
import ReciptForm from 'src/components/sections/forms/ReciptForm'
import { CREATE_RECEIPT } from 'src/lib/qraphql'
import FullPageLoader from 'src/components/sections/FullPageLoader'
import { useMutation } from '@apollo/client'
import Button from 'src/components/html/Button'
import { useSession } from 'next-auth/react'

const initialData: ReceiptFormData = {
  fullname: '',
  email: '',
  toc: false,
  amount: 0,
  occasion: '',
  type: 'deposit',
  account: '',
  card: 'unused',
  responsible_unit: 'default',
  comments: '',
  appendix: [],
}

export default function Recipt() {
  const [step, setStep] = useState<number>(0)
  const [formData, setFormData] = useState<ReceiptFormData>(initialData)
  const [createReceipt, { loading, error }] = useMutation(CREATE_RECEIPT)

  const submitForm = async () => {
    const data: ReceiptCreateInput = {
      type: formData.type,
      amount: formData.amount,
      occasion: formData.occasion,
      application: {
        create: {
          fullname: formData.fullname,
          email: formData.email,
          comments: formData.comments,
        },
      },
    }
    if (formData.type === 'deposit') {
      data.account = formData.account
    } else {
      data.card = formData.card
    }
    if (formData.userid) {
      data.application.create.user = { connect: { id: formData.userid } }
    }

    await createReceipt({ variables: { data } })
  }

  if (loading)
    return (
      <Public title="Kvittering">
        <FullPageLoader />
      </Public>
    )
  if (error)
    return (
      <Public title="Kvittering">
        {`Submission error! ${error.message}`}
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
