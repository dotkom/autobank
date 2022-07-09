import { useState } from 'react'
import ExtraInformation from 'components/forms/receipt/sections/ExtraInformation'
import ReciptInformation from 'components/forms/receipt/sections/ReciptInformation'
import UserInformation from 'components/forms/receipt/sections/UserInformation'
import {
  IUserData,
  IReceiptData,
  IExtraInformationData,
} from 'components/forms/receipt/state'
import Public from 'components/Layout/Public'

const initUserData: IUserData = {
  fullname: '',
  email: '',
  toc: false,
}

const initReceiptData: IReceiptData = {
  amount: null,
  occation: '',
  type: 'deposit',
  account: '',
  cardDetails: 'unused',
  responsible_unit: 'default',
}

export default function ReciptForm() {
  const [step, setStep] = useState<0 | 1 | 2>(0) //TODO: Add "enum" for steps, remove use of magic numbers.
  const [userFormData, setUserFormData] = useState<IUserData>(initUserData)
  const [receciptInformationData, setRececiptInformationData] =
    useState<IReceiptData>(initReceiptData)

  const changeStep = (delta) => {
    setStep(step + delta)
  }

  const submitForm = (extraInformationData: IExtraInformationData) => {
    const formData = {
      ...userFormData,
      ...receciptInformationData,
      ...extraInformationData,
    }
    console.log('Receipt form submitted')
    console.log(formData)
  }

  return (
    <Public title="Kvittering">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Kvitteringsskjema</h1>
        {step === 0 && (
          <UserInformation
            changeStep={changeStep}
            initialData={userFormData}
            setFormData={setUserFormData}
          />
        )}
        {step === 1 && (
          <ReciptInformation
            changeStep={changeStep}
            initialData={receciptInformationData}
            setFormData={setRececiptInformationData}
          />
        )}
        {step === 2 && (
          <ExtraInformation
            changeStep={changeStep}
            submitReceiptForm={submitForm}
          />
        )}
      </div>
    </Public>
  )
}
