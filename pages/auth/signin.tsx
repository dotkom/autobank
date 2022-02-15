import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react';
import Button from '../../components/elements/Button';
import Online, { OnlineBankom } from '../../components/icons/Online';
import Layout from '../../components/Layout';

export default function SignIn({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) {
  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg'>
        <OnlineBankom />
        <h1>Log in</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              onClick={() => signIn(provider.id)}
              pri={'primary'}
              logo
              className='flex items-center'
            >
              Sign in with {provider.name}
              {provider.name == 'Online' ? (
                <Online className='h-5 ml-1.5' color='white' />
              ) : (
                ''
              )}
            </Button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

// en stundent kom for å få hjelp med en øving, og han hadde lagd en kode hvor det var tydelig at han hadde søk masse og satt sammen mange rare og spesifikke løsningner fra nettet.
// vi måtte ta et steg tilbake og så se på hvilke mulighete som finnes. jeg burde kanskje ha spurt han om hva han selv hadde vurdert av løsninger.
// endte opp med å snakke litt om liste teorier, hvor han forklarte det jeg ikke visste om han visste. til slutt så var det jeg som ga han infoen men han som måtte ta den i bruk og koble hvordan man kunne bruke lister i oppgaven
// ville anbefalt han å møte i øvingsforelesningene, skal gjøre et etterpå

// problem account klasse
// Account(double, double) - Konstruktøren skal ta inn startbeløpet og rentefoten (prosentpoeng). Ingen av disse kan være negative.
// void setInterestRate(double) - Denne metoden tar inn en ikke-negativ verdi og setter renten til denne verdien.
// void deposit(double) - Denne metoden tar inn et ikke-negativt beløp og øker konto-beløpet tilsvarende.
// void withdraw(double) - Denne metoden tar inn et ikke-negativt beløp og minsker konto-beløpet tilsvarende. Dersom det nye konto-beløpet er negativt, så skal tilstanden ikke endre, og det skal utløses et unntak av typen IllegalArgumentException.
// felles - ikke negativ verdi -> lage an valideringsfunksjon

// double getBalance(), double getInterestRate() - returner verdien

// void addInterest() - beregner renta og legger det til konto-beløpet.
// enkel kaluklering

// implementere alle metodene

// kjøre de utdelte testene
