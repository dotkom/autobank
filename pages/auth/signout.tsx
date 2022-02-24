import React from 'react';

import { signOut } from 'next-auth/react';
import Button from '../../components/elements/Button';
import { OnlineBankom } from '../../components/icons/Online';
import Layout from '../../components/Layout';

export default function SignOut() {
  return (
    <Layout>
      <div className=' max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg'>
        <OnlineBankom className='h-10 my-10' />

        <h1>Signout</h1>
        <p>Are you sure you want to sign out?</p>
        <Button onClick={() => signOut()} pri={'primary'}>
          log ut
        </Button>
      </div>
    </Layout>
  );
}
