import { signIn } from 'next-auth/react';
import Button, { ButtonLink } from '../../components/elements/Button';
import { OnlineBankom } from '../../components/icons/Online';
import Layout from '../../components/Layout';

/**
 * The following errors are passed as error query parameters to the default or overridden error page.
 *
 * [Documentation](https://next-auth.js.org/configuration/pages#error-page) */
export type ErrorType =
  | 'default'
  | 'configuration'
  | 'accessdenied'
  | 'verification';

export interface ErrorProps {
  error?: ErrorType;
}

interface ErrorView {
  status: number;
  heading: string;
  message: JSX.Element;
  signin?: JSX.Element;
}

/** Renders an error page. */
export default function ErrorPage({ error = 'default' }: ErrorProps) {
  const errors: Record<ErrorType, ErrorView> = {
    default: {
      status: 200,
      heading: 'Error',
      message: (
        <p>
          <ButtonLink pri={'primary'}>Gå hjem</ButtonLink>
        </p>
      ),
    },
    configuration: {
      status: 500,
      heading: 'Server error',
      message: (
        <div>
          <p>There is a problem with the server configuration.</p>
          <p>Check the server logs for more information.</p>
        </div>
      ),
    },
    accessdenied: {
      status: 403,
      heading: 'Access Denied',
      message: (
        <div>
          <p>You do not have permission to sign in.</p>
          <p>
            <Button onClick={() => signIn()} pri={'primary'}>
              log på
            </Button>
          </p>
        </div>
      ),
    },
    verification: {
      status: 403,
      heading: 'Unable to sign in',
      message: (
        <div>
          <p>The sign in link is no longer valid.</p>
          <p>It may have been used already or it may have expired.</p>
        </div>
      ),
      signin: (
        <Button onClick={() => signIn()} pri={'primary'}>
          log på
        </Button>
      ),
    },
  };

  const { status, heading, message, signin } =
    errors[error.toLowerCase()] ?? errors.default;

  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg'>
        <OnlineBankom className='h-10 my-10' />
        <div className='error'>
          <div className='card'>
            <h1>{heading + ' - ' + status}</h1>
            <div className='message'>{message}</div>
            {signin}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { error } = ctx.query;

  return {
    props: { error },
  };
}
