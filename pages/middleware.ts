import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'

const secret = process.env.NEXTAUTH_SECRET

export default withAuth({
  callbacks: {
    async authorized({ req }) {
      const token = await getToken({ req, secret })

      console.log(token)
      if (req.url.includes('admin')) {
        console.log('admin')
      } else if (req.url.includes('profile')) {
        console.log('user')
      }

      return true
    },
  },
})

export const config = { matcher: ['/admin', '/api/admin'] }
