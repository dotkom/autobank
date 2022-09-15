import { signOut, useSession } from 'next-auth/react'
import React from 'react'

import ProfileForm from './ProfileForm'
import ProfileMenu from './ProfileMenu'
import ReceiptList from './ReceiptList'

const Profile = () => {
  const { data: session, status } = useSession()
  return (
    <div>
      <ProfileMenu />
      <ProfileForm />
      <ReceiptList />
      {/*  <div>
        {JSON.stringify(session)}, {status}
      </div>
      <Button pri={'primary'} onClick={() => signOut()}>
        Log ut
      </Button>
      */}
    </div>
  )
}

export default Profile
