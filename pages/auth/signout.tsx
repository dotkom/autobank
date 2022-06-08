import React from 'react'

import { signOut } from 'next-auth/react'
import Button from '../../components/elements/Button'
import { OnlineBankom } from '../../components/icons/Online'
import Layout from '../../components/Layout'

export default function SignOut() {
  return (
    <Layout>
      <div className=" max-w-lg w-full flex items-center flex-col justify-center shadow-2xl bg-slate-50 p-10 rounded-lg">
        <OnlineBankom className="h-10 my-10" />

        <h1 className="text-xl">Log ut</h1>
        <p>Er du sikker på at du vil logge ut?</p>
        <Button onClick={() => signOut()} className={`mt-5`}>
          Ja, log ut
        </Button>
      </div>
    </Layout>
  )
}
