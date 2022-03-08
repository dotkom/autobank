import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import paymentImage from '../images/undraw/undraw_payment.svg'
import receiptImage from '../images/undraw/undraw_receipt.svg'
import creditcardImage from '../images/undraw/undraw_credit_card.svg'
import vaultImage from '../images/undraw/undraw_vault.svg'
import questionsImage from '../images/undraw/undraw_questions.svg'

const IndexPage = () => (
  <Layout title="Online Autobank">
    <div className="flex flex-col m-10 divide-y-2">
      {/* Greeting / bankbot */}
      <section className="flex flex-col-reverse py-12 md:grid gap-4 grid-cols-2">
        <div className="space-y-10">
          <p className="text-2xl">
            Har du eller planlegger du å bruke penger på vegne av Online
            linjeforening?
            <br />
            La bankbotten velge skjema for deg!
          </p>
          <div className="justify-center flex space-x-2">
            <button className="bg-online-blue-500 hover:bg-online-blue-700 text-white font-bold py-2 px-4 rounded">
              Bankbotten
            </button>
            <p className="self-center">eller</p>
            <button className="bg-online-blue-500 hover:bg-online-blue-700 text-white font-bold py-2 px-4 rounded">
              Velg selv
            </button>
          </div>
        </div>
        <Image
          src={paymentImage}
          alt="Online kredittkort-bilde"
          width={400}
          height={300}
        />
      </section>
      {/* ---Receipt, onlinepotten, fondet*/}
      <section className="flex flex-col space-y-20 py-12 px-12">
        <p className="text-3xl">
          Se alle måtene du kan bruke Online sine penger på:
        </p>
        {/* May need to change 'items-end' as boxes gets different descriptions */}
        <div className="space-y-12 items-end md:grid gap-8 grid-cols-3 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-end">
              <p className="text-2xl">Kvitteringer</p>
              <Image
                src={receiptImage}
                alt="Kvitteringsbilde"
                width={200}
                height={150}
              />
            </div>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem.
            </p>
            <a
              href="#"
              className="text-lg no-underline text-blue-600 hover:underline hover:text-blue-800"
            >
              Finn ut mer
            </a>
          </div>
          <div className="space-y-3">
            <div className="flex items-end">
              <p className="text-2xl">Onlinepotten</p>
              <Image
                src={creditcardImage}
                alt="Onlinepotten-bilde"
                width={200}
                height={150}
              />
            </div>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem.
            </p>
            <a
              href="#"
              className="text-lg no-underline text-blue-600 hover:underline hover:text-blue-800"
            >
              Finn ut mer
            </a>
          </div>
          <div className="space-y-3">
            <div className="flex items-end">
              <p className="text-2xl">Fondet</p>
              <Image
                src={vaultImage}
                alt="Online fondet-bilde"
                width={200}
                height={150}
              />
            </div>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem.
            </p>
            <a
              href="#"
              className="text-lg no-underline text-blue-600 hover:underline hover:text-blue-800"
            >
              Finn ut mer
            </a>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="flex flex-col md:grid gap-4 grid-cols-2 py-12">
        <Image
          src={questionsImage}
          alt="Spørsmålsbilde"
          width={400}
          height={300}
        />
        <div>
          <p className="text-3xl">Lurer du fortsatt på noe? FAQ</p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
          <button className="mt-6 bg-[#0D5474] hover:bg-[#0A425C] text-white font-bold py-2 px-4 rounded">
            Ofte stilte spørsmål
          </button>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
