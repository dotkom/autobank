import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Button, { ButtonLink } from 'components/html/Button'
import { OnlineBankom } from 'components/icons/Online'
import Public from 'components/Layout/Public'

/**
 * The following errors are passed as error query parameters to the default or overridden error page.
 *
 * [Documentation](https://next-auth.js.org/configuration/pages#error-page) */
export type ErrorType =
  | 'default'
  | 'configuration'
  | 'accessdenied'
  | 'verification'

export interface ErrorProps {
  error?: ErrorType
}

interface ErrorView {
  status: number
  heading: string
  message: JSX.Element
  signin?: JSX.Element
}

/** Renders an error page. */
export default function ErrorPage({ error = 'default' }: ErrorProps) {
  const errors: Record<ErrorType, ErrorView> = {
    default: {
      status: 200,
      heading: 'Error',
      message: (
        <div className="flex flex-col justify-center items-center">
          <p className="my-2">You did somthing wrong i think:)</p>
          <Link href={'/'}>
            <ButtonLink>Gå hjem</ButtonLink>
          </Link>
        </div>
      ),
    },
    configuration: {
      status: 500,
      heading: 'Server error',
      message: (
        <div className="flex flex-col justify-center items-center">
          <p>There is a problem with the server configuration.</p>
          <p>Check the server logs for more information.</p>
        </div>
      ),
    },
    accessdenied: {
      status: 403,
      heading: 'Access Denied',
      message: (
        <div className="flex flex-col justify-center items-center">
          <p>You do not have permission to sign in.</p>
          <p>
            <Button onClick={() => signIn()}>log på</Button>
          </p>
        </div>
      ),
    },
    verification: {
      status: 403,
      heading: 'Unable to sign in',
      message: (
        <div className="flex flex-col justify-center items-center">
          <p>The sign in link is no longer valid.</p>
          <p>It may have been used already or it may have expired.</p>
        </div>
      ),
      signin: <Button onClick={() => signIn()}>log på</Button>,
    },
  }

  const { status, heading, message, signin } =
    errors[error.toLowerCase()] ?? errors.default

  return (
    <Public>
      <div className=" max-w-lg w-full flex items-center flex-col justify-center p-10 rounded-lg">
        <OnlineBankom className="h-10 my-5" />
        <div className="error my-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-5">{heading + ' - ' + status}</h1>
            <div className="">{message}</div>
            {signin}
          </div>
        </div>
      </div>
    </Public>
  )
}

export async function getServerSideProps(ctx) {
  const { error } = ctx.query

  if (error)
    return {
      props: { error },
    }

  return {
    props: { error: 'default' },
  }
}
