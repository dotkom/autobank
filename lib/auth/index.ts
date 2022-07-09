import { getSession } from 'next-auth/react'

export async function authenticate(
  context,
  admin: boolean = false,
  props: any = {}
) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
      },
    }
  }

  return {
    props,
  }
}
