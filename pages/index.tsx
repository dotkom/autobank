import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import heroImage from '../public/undraw_pay_online_b-1-hk 1.svg'
import kvitteringImage from '../public/undraw_receipt_re_fre3 1.svg'
import onlinepottenImage from '../public/undraw_credit_card_payment_re_o911 1.svg'
import fondetImage from '../public/undraw_vault_re_s4my 1.svg'
import faqImage from '../public/undraw_questions_re_1fy7 1.svg'

const IndexPage = () => (
  <Layout title="Online Autobank">
    <div className='flex flex-col space-y-20'>
      {/* Greeting / bankbot */}
      <section className='flex'>
        <div>
          <p className='text-2xl'>
            Har du eller planlegger du å bruke penger på vegne av Online linjeforening?<br/>La bankbotten velge skjema for deg!
          </p>
          <p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Bankbotten
            </button>
            eller
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Velg selv
            </button>
          </p>
        </div>
        <Image src={heroImage} alt='Online kredittkort.' width={400} height={300}/>
      </section>
      {/* Options */}
      <section className='md:grid gap-4 grid-cols-3'>
        <div>
          <p className='text-xl'>Kvitteringer</p>
          <Image src={kvitteringImage} alt='Kvittering' width={200} height={150}/>
        </div>
        <div>
          <p className='text-xl'>Onlinepotten</p>
          <Image src={onlinepottenImage} alt='Onlinepotten' width={200} height={150}/>
        </div>
        <div>
          <p className='text-xl'>Fondet</p>
          <Image src={fondetImage} alt='Fondet' width={200} height={150}/>
        </div>
      </section>
      {/* FAQ */}
      <section className='flex'>
        <Image src={faqImage} alt='Spørsmålsillustrasjon.' width={400} height={300}/>
        <div>
          <p className='text-2xl'>Lurer du fortsatt på noe? FAQ</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            FAQ
          </button>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
