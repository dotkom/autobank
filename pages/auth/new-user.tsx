import { useSession } from 'next-auth/react';
import React from 'react';

const newuser = () => {
  const { data: session, status } = useSession();
  return <div>{JSON.stringify(session)}</div>;
};

export default newuser;
