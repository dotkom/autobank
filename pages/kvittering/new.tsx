import { useState } from 'react'

import Public from 'components/Layout/Public'
import { ReceiptFormData } from 'types/forms'
import UserForm from 'components/sections/forms/UserForm'
import ExtraForm from 'components/sections/forms/ExtraForm'
import ReciptForm from 'components/sections/forms/ReciptForm'

const initialData: ReceiptFormData = {
  fullname: '',
  email: '',
  toc: false,
  amount: null,
  occasion: '',
  type: 'deposit',
  account: '',
  cardDetails: 'unused',
  responsible_unit: 'default',
  comments: '',
  attachments: [],
}

export default function Recipt() {
  const [step, setStep] = useState<number>(0)
  const [formData, setFormData] = useState<ReceiptFormData>(initialData)

  const submitForm = () => {
    console.log('Receipt form submitted')
    console.log(formData)
  }

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
