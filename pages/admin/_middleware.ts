import type { NextFetchEvent, NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  }

  const session = await getSession({ req: requestForNextAuth })

  if (session) {
    console.log('middleware' + session)

    // validate your session here

    return NextResponse.next()
  } else {
    // the user is not logged in, redirect to the sign-in page
    const signInPage = '/auth/signin'
    const signInUrl = new URL(signInPage, req.nextUrl.origin)
    signInUrl.searchParams.append('callbackUrl', req.url)
    return NextResponse.next()

    // return NextResponse.redirect(signInUrl)
  }
}
