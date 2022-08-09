import { useSession } from 'next-auth/react'
import React from 'react'

const Newuser = () => {
  const { data: session, status } = useSession()
  return <div>{JSON.stringify(session)}</div>
}

export default Newuser
