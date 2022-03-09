import { useState } from 'react'
import CompanyInformation from '../../components/forms/invoice/sections/CompanyInformation'
import Layout from '../../components/Layout'
import ContactPerson from '../../components/forms/invoice/sections/ContactPerson'
import InvoiceInformation from '../../components/forms/invoice/sections/InvoiceInformation'
import {
  ICompanyInformation,
  IContactPerson,
  IInvoiceInformation,
} from '../../components/forms/invoice/state'

const initCompanyData: ICompanyInformation = {
  organizationNumber: '',
  companyName: '',
}

const initContactData: IContactPerson = {
  name: '',
  email: '',
  phone: '',
}

const initInvoiceData: IInvoiceInformation = {
  occation: 'default',
  delivery: 'default',
  isDueDate: false,
  isPoNumber: false,
  dueDate: '',
  poNumber: '',
}

export default function InviceForm() {
  const [step, setStep] = useState<0 | 1 | 2>(0) //TODO: Add "enum" for steps, remove use of magic numbers.
  const [companyData, setCompanyData] =
    useState<ICompanyInformation>(initCompanyData)
  const [contactData, setContactData] =
    useState<IContactPerson>(initContactData)
  const [invoiceData, setInvoiceData] =
    useState<IInvoiceInformation>(initInvoiceData)

  const submitInvoiceForm = (invoiceData: IInvoiceInformation) => {
    const formData = {
      ...companyData,
      ...contactData,
      ...invoiceData,
    }
    console.log('Invoice form submitted')
    console.log(formData)
  }

  const changeStep = (delta) => {
    setStep(step + delta)
  }

  return (
    <Layout title="Fakturainformasjon">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Fakturainformasjon</h1>
        {step === 0 && (
          <CompanyInformation
            changeStep={changeStep}
            initialData={companyData}
            setFormData={setCompanyData}
          />
        )}
        {step === 1 && (
          <ContactPerson
            changeStep={changeStep}
            initialData={contactData}
            setFormData={setContactData}
          />
        )}
        {step === 2 && (
          <InvoiceInformation
            changeStep={changeStep}
            initialData={invoiceData}
            setFormData={setInvoiceData}
            submitInvoiceForm={submitInvoiceForm}
          />
        )}
      </div>
    </Layout>
  )
}
