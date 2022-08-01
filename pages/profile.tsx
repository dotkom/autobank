import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import Button from '../components/elements/Button'
import Layout from '../components/Layout'

import ProfileForm from './profile/ProfileForm'
import ReceiptList from './profile/ReceiptList'

const Profile = () => {
  const { data: session, status } = useSession()
  return (
    <Layout>
      <ProfileForm />
      <ReceiptList />
      {/* 
         <div>
        {JSON.stringify(session)}, {status}
      </div>
      <Button pri={'primary'} onClick={() => signOut()}>
        Log ut
      </Button>
      */}
    </Layout>
  )
}

export default Profile
