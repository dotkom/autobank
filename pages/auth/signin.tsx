import axios from 'axios'
// import { calcRelativeAxisPosition } from 'framer-motion/types/projection/geometry/delta-calc'
import { BuiltInProviderType } from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from 'next-auth/react'
import { useState } from 'react'
import Button from '../../components/elements/Button'
import Input from '../../components/elements/form/Input'
import Online, { OnlineBankom } from '../../components/icons/Online'
import Layout from '../../components/Layout'

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
}
const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default)
  return <div className="pb-5 text-red-800 font-medium">{errorMessage}</div>
}

export default function SignIn({
  error,
  providers,
}: {
  error?: string
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null
}) {
  const { data: session, status } = useSession()
  const [email, setemail] = useState('')

  const sendLoginVerification = (e) => {
    e.preventDefault()

    // Notice, we are also redirecting users to the protected route instead of the homepage after signing in.
    signIn('email', { callbackUrl: '/protected', email })
  }
  return (
    <Layout>
      <div className=" max-w-lg w-full flex items-center flex-col justify-center shadow-2xl bg-slate-50 p-10 rounded-lg">
        <OnlineBankom className="h-10 my-10" />
        <h2 className="mx-auto text-lg mb-2 text-center">
          {status == 'authenticated' &&
            'signed in as ' + session.user.name + ', '}
          Online signin er midlertidig utilgjengelig
        </h2>
        {error && <SignInError error={error} />}
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {provider.type === 'email' ? (
                <div>
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">
                      Eller
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                  <form
                    onSubmit={sendLoginVerification}
                    className={`flex flex-col items-center`}
                  >
                    <h2 className="mx-auto text-lg mb-2">Log inn med mail</h2>
                    <Input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value)
                      }}
                    />
                    <Button type="submit" pri={'primary'} name="login">
                      Send Magic Link 🪄
                    </Button>
                  </form>
                </div>
              ) : (
                <Button
                  onClick={() => signIn(provider.id)}
                  pri={'primary'}
                  logo
                  className="flex items-center bg-gray-600" // TODO: remove bg-gray when online signin works
                  disabled
                >
                  Log in med {provider.name}
                  {provider.name == 'Online' ? (
                    <Online className="h-5 ml-1.5" color="white" />
                  ) : (
                    ''
                  )}
                </Button>
              )}
            </div>
          ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const providers = await getProviders()
  const { error } = ctx.query

  if (error)
    return {
      props: { error, providers },
    }
  return {
    props: { providers },
  }
}
