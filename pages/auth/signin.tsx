import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from 'next-auth/react';
import Button from '../../components/elements/Button';
import Online, { OnlineBankom } from '../../components/icons/Online';
import Layout from '../../components/Layout';

const errors = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};
const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return <div className='pb-5 text-red-800 font-medium'>{errorMessage}</div>;
};

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
  const { data: session, status } = useSession();
  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center shadow-2xl bg-slate-50 p-10 rounded-lg'>
        <OnlineBankom className='h-10 my-10' />
        {status == 'authenticated' && 'signed in as' + session.user.name}
        {error && <SignInError error={error} />}
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
