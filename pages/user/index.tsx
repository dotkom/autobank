import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from 'components/elements/Button'

const Profile = () => {
  const { data: session, status } = useSession()

  if (status !== 'authenticated') {
    return <p>fail m8</p>
  }
  return (
    <div>
      <p>Signed in as {session.user.email}</p>
      <Button onClick={() => signOut()} />
    </div>
  )
}

export default Profile
