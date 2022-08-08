import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: 'USER' | 'ADMIN' | 'SUPERADMIN'
    }
    expires: ISODateString
  }
  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role: 'USER' | 'ADMIN' | 'SUPERADMIN'
  }
}
