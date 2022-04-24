<<<<<<< HEAD
import React from 'react'
import Layout from '../components/Layout'

function profile() {
  return (
    <Layout>
      <div>profile page</div>
    </Layout>
  )
}

export default profile
=======
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Button from '../components/elements/Button';
import Layout from '../components/Layout';

const profile = () => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      <div>
        {JSON.stringify(session)}, {status}
      </div>
      <Button pri={'primary'} onClick={() => signOut()}>
        Log ut
      </Button>
    </Layout>
  );
};

export default profile;
>>>>>>> origin/main
