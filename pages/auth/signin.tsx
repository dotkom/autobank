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
  error,
  providers,
}: {
  error?: string;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) {
  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center shadow-2xl bg-slate-50 p-10 rounded-lg'>
        <OnlineBankom className='h-10 my-10' />
        {error && (
          <div className='pb-5 text-red-800 font-medium'>Error - {error}</div>
        )}
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <Button
                onClick={() => signIn(provider.id)}
                pri={'primary'}
                logo
                className='flex items-center'
              >
                Log in med {provider.name}
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

export async function getServerSideProps(ctx) {
  const providers = await getProviders();
  const { error } = ctx.query;

  if (error)
    return {
      props: { error, providers },
    };
  return {
    props: { providers },
  };
}
