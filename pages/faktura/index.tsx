import CompanyInformation from '../../components/forms/invoice/sections/CompanyInformation'
import Layout from '../../components/Layout'
import ContactPerson from '../../components/forms/invoice/sections/ContactPerson'
import InvoiceInformation from '../../components/forms/invoice/sections/InvoiceInformation'

export default function InviceForm() {
  const step = 2
  return (
    <Layout title="Fakturainformasjon">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Fakturainformasjon</h1>
        {step === 0 && <CompanyInformation />}
        {step === 1 && <ContactPerson />}
        {step === 2 && <InvoiceInformation />}
      </div>
    </Layout>
  )
}
