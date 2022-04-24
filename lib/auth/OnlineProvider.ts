import { Session } from 'next-auth';
import type { OAuthConfig, OAuthUserConfig } from 'next-auth/providers/oauth';
import { type } from 'os';

export const OW4_ADDRESS = process.env.OW4_ADDRESS || 'https://online.ntnu.no';

export type Token = {
  name?: string;
  email?: string;
  picture?: string; // url to image
  accessToken?: string;
  iat: number;
  exp: number;
};

export type Account = {
  provider: string | null;
  type: string | null;
  id: number | null;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpires: null;
};

export interface Profile {
  sub: number;
  name: string;
  given_name: string;
  family_name: string;
  nickname: string;
  preferred_username: string;
  picture: string;
}

interface IOnlinewebScope {
  field_of_study: string;
  member: boolean;
  rfid: string | null;
  staff: boolean;
  superuser: boolean;
}

interface IEmailScope {
  email: string;
  email_verified: boolean;
}

/**
 * Profile information returned from authenticating with
 * OpenID Connect to Onlineweb4.
 */
export type IAuthProfile = NonNullable<Profile> &
  IOnlinewebScope &
  Partial<IEmailScope>;

export type OnlineSession = Session & {};

// authorization (replaces authorizationUrl, authorizationParams, scope)
// token replaces (accessTokenUrl, headers, params)
// userinfo (replaces profileUrl)
// issuer(replaces domain)

export default function OnlineProvider<P extends IAuthProfile & { id: string }>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: 'onlineweb4',
    name: 'Online',
    type: 'oauth',
    version: '2.0',
    authorization: {
      params: {
        scope: 'openid profile email onlineweb4',
        response_type: 'code',
      },
    },
    wellKnown:
      'https://old.online.ntnu.no/openid/.well-known/openid-configuration',
    idToken: true,
    checks: ['state'],
    profile: (profile: IAuthProfile) => {
      return {
        ...profile,
        id: '' + profile.sub,
        image: profile.picture,
        email: profile.email,
      };
    },
    options,
  };
}
