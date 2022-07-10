import CompanyForm from 'components/sections/forms/CompanyForm'
import CompanyUserForm from 'components/sections/forms/CompanyUserForm'
import InvoiceForm from 'components/sections/forms/InvoiceForm'
import { useState } from 'react'
import { InvoiceFormData } from 'types/forms'
import Public from '../../components/Layout/Public'

const initData: InvoiceFormData = {
  organizationNumber: '',
  companyName: '',
  name: '',
  email: '',
  phone: '',
  occasion: 'default',
  delivery: 'default',
  isDueDate: false,
  isPoNumber: false,
  dueDate: '',
  poNumber: '',
}

export default function InviceForm() {
  const [step, setStep] = useState<0 | 1 | 2>(0) //TODO: Add "enum" for steps, remove use of magic numbers.
  const [formData, setFormData] = useState<InvoiceFormData>(initData)

  const submitForm = () => {}

  return (
    <Public title="Fakturainformasjon">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Fakturainformasjon</h1>
        {step === 0 && (
          <CompanyForm
            data={formData}
            setData={setFormData}
            navigation={{ setStep, step, numberOfSteps: 3, submitForm }}
          />
        )}
        {step === 1 && (
          <CompanyUserForm
            data={formData}
            setData={setFormData}
            navigation={{ setStep, step, numberOfSteps: 3, submitForm }}
          />
        )}
        {step === 2 && (
          <InvoiceForm
            data={formData}
            setData={setFormData}
            navigation={{ setStep, step, numberOfSteps: 3, submitForm }}
          />
        )}
      </div>
    </Public>
  )
}
