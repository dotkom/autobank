import { BuiltInProviderType } from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from 'next-auth/react'
import { useState } from 'react'
import Button from 'src/components/html/Button'
import Online, { OnlineBankom } from 'src/components/icons/Online'
import Public from 'src/components/Layout/Public'
import Input from 'src/components/html/form/Input'

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
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const sendLoginVerification = (e) => {
    e.preventDefault()

    // Notice, we are also redirecting users to the protected route instead of the homepage after signing in.
    signIn('email', { callbackUrl: '/', email })
  }

  const testLogin = (e) => {
    e.preventDefault()

    // Notice, we are also redirecting users to the protected route instead of the homepage after signing in.
    signIn('credentials', { redirect: false, username })
  }
  return (
    <Public>
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
                        setEmail(e.target.value)
                      }}
                    />
                    <Button type="submit" name="login">
                      Send Magic Link 🪄
                    </Button>
                  </form>
                </div>
              ) : provider.type === 'credentials' ? (
                <div>
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">
                      Eller
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                  <form
                    onSubmit={testLogin}
                    className={`flex flex-col items-center`}
                  >
                    <h2 className="mx-auto text-lg mb-2">Test login</h2>
                    <Input
                      name="username"
                      type="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value)
                      }}
                    />
                    <Button type="submit" name="login">
                      Send Magic Link 🪄
                    </Button>
                  </form>
                </div>
              ) : (
                <Button
                  onClick={() => signIn(provider.id)}
                  logo
                  className={`flex items-center ${
                    provider.name == 'Online' ? 'bg-gray-600' : ''
                  }`} // TODO: remove bg-gray when online signin works
                  disabled={provider.name == 'Online'}
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
    </Public>
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
