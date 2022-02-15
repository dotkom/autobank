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
    <div className='flex flex-col m-10 divide-y-2'>
      {/* Greeting / bankbot */}
      <section className='flex flex-col-reverse py-12 md:grid gap-4 grid-cols-2'>
        <div className='space-y-10'>
          <p className='text-2xl'>Har du eller planlegger du å bruke penger på vegne av Online linjeforening?<br/>La bankbotten velge skjema for deg!</p>
          <div className='justify-center flex space-x-2'>
             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Bankbotten</button>
             <p className='self-center'>eller</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Velg selv</button>
          </div>
        </div>
        <Image src={heroImage} alt='Online kredittkort.' width={400} height={300}/>
      </section>
      {/* Receipt, onlinepotten, fondet */}
      <section className='flex flex-col space-y-20 py-12 px-12'>
        <p className='text-3xl'>Se alle måtene du kan bruke Online sine penger på:</p>
        {/* May need to change 'items-end' as boxes gets different descriptions */}
        <div className='space-y-12 items-end md:grid gap-8 grid-cols-3 md:space-y-0'>
          <div className='space-y-3'>
            <div className='flex items-end'>
              <p className='text-2xl'>Kvitteringer</p>
              <Image src={kvitteringImage} alt='Kvittering.' width={200} height={150}/>
            </div>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
            <a href="#" className="text-lg no-underline text-blue-600 hover:underline hover:text-blue-800">Finn ut mer</a>
          </div>
          <div className='space-y-3'>
            <div className='flex items-end'>
              <p className='text-2xl'>Onlinepotten</p>
              <Image src={onlinepottenImage} alt='Onlinepotten.' width={200} height={150}/>
            </div>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
            <a href="#" className="text-lg no-underline text-blue-600 hover:underline hover:text-blue-800">Finn ut mer</a>
          </div>
          <div className='space-y-3'>
            <div className='flex items-end'>
              <p className='text-2xl'>Fondet</p>
              <Image src={fondetImage} alt='Fondet.' width={200} height={150}/>
            </div>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
            <a href="#" className="text-lg no-underline text-blue-600 hover:underline hover:text-blue-800">Finn ut mer</a>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className='flex flex-col md:grid gap-4 grid-cols-2 py-12'>
        <Image src={faqImage} alt='Spørsmålsbilde.' width={400} height={300}/>
        <div>
          <p className='text-3xl'>Lurer du fortsatt på noe? FAQ</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
          <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Ofte stilte spørsmål</button>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
