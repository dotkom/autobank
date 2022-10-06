import React from 'react'
import { OnlineBankom } from 'src/components/icons/Online'
import { trpc } from '~/utils/trpc'

const test = () => {
  // This can either be a tuple ['login'] or string 'login'
  const mutation = trpc.useMutation(['login'])

  const handleLogin = async () => {
    const name = 'John Doe'

    mutation.mutate({ id: 'lol' })
  }

  return (
    <div>
      <h1>Login Form</h1>
      <button onClick={handleLogin} disabled={mutation.isLoading}>
        Login
      </button>

      {mutation.data && mutation.data}

      {mutation.error && (
        <p>
          Something went wrong! {JSON.stringify(mutation.error, null, 2)}{' '}
          {mutation.error.message}
        </p>
      )}
    </div>
  )
}

export default test
