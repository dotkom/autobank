import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import OnlineProvider from '../../../lib/auth/OnlineProvider'
import sendVerification from '../../../lib/auth/mail/verification'
import { prisma } from '../../../prisma'

export default NextAuth({
  providers: [
    OnlineProvider({
      clientId: process.env.OW4_SSO_CLIENT_ID,
      clientSecret: process.env.OW4_SSO_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
    // email kan legges til etter at adapter og db er lagt til
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_SERVER_USER,
          serviceClient: process.env.EMAIL_CLIENT_ID,
          privateKey: process.env.EMAIL_PRIVATE_KEY.replace(/\\n/g, '\n'),
          accessUrl: process.env.EMAIL_TOKEN_URI,
        },
        secure: true,
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        sendVerification({
          identifier: email,
          url,
          provider: { server, from },
        })
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session.user = await prisma.user.findUnique({ where: { id: user.id } })

      return session
    },
  },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
})
