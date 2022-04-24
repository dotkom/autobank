import { OnlineBankom } from '../../components/icons/Online';
import Layout from '../../components/Layout';

export default function VerifyRequestPage() {
  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center shadow-2xl bg-slate-50 p-10 rounded-lg'>
        <OnlineBankom className='h-10 my-10' />
        <h1>Check your email</h1>
        <p>A sign in link has been sent to your email address.</p>
      </div>
    </Layout>
  );
}
