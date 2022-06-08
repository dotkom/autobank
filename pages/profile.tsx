import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import Button from 'components/elements/Button'
import Public from 'components/Layout/Public'

const Profile = () => {
  const { data: session, status } = useSession()
  return (
    <Public>
      <div>
        {JSON.stringify(session)}, {status}
      </div>
      <Button onClick={() => signOut()}>Log ut</Button>
    </Public>
  )
}

export default Profile
