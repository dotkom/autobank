import { OnlineBankom } from '../../components/icons/Online';
import Layout from '../../components/Layout';

export default function VerifyRequestPage() {
  const url = {
    origin: process.env.NEXTAUTH_URL
      ? process.env.NEXTAUTH_URL
      : 'https://okonomi.online.ntnu.no',
    host: process.env.NEXTAUTH_URL
      ? process.env.NEXTAUTH_URL.replace('https://', '').replace('http://', '')
      : 'okonomi.online.ntnu.no',
  };
  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg'>
        <OnlineBankom className='h-10 my-10' />
        <h1>Check your email</h1>
        <p>A sign in link has been sent to your email address.</p>
        <p>
          <a className='site' href={url.origin}>
            {url.host}
          </a>
        </p>
      </div>
    </Layout>
  );
}
