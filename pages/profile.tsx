import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import Button from '../components/elements/Button'
import Layout from '../components/Layout'

const Profile = () => {
  const { data: session, status } = useSession()
  return (
    <Layout>
      <div>
        {JSON.stringify(session)}, {status}
      </div>
      <Button pri={'primary'} onClick={() => signOut()}>
        Log ut
      </Button>
    </Layout>
  )
}

export default Profile
