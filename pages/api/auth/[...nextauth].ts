import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import EmailProvider from 'next-auth/providers/email';
import sendVerification from '../../../lib/auth/mail/verfication';
import OnlineProvider from '../../../lib/auth/OnlineProvider';

export default NextAuth({
  providers: [
    OnlineProvider({
      clientId: process.env.OW4_SSO_CLIENT_ID,
      clientSecret: process.env.OW4_SSO_CLIENT_SECRET,
    }),
    // email kan legges til etter at adapter og db er lagt til
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   sendVerificationRequest({
    //     identifier: email,
    //     url,
    //     provider: { server, from },
    //   }) {
    //     sendVerification({
    //       identifier: email,
    //       url,
    //       provider: { server, from },
    //     });
    //   },
    // }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      console.log({ token, account });

      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: 'KvW8Rt9b5K4M3HaO9lF236BiK1nYkty7tIdb7D9i8Ao=',
});
