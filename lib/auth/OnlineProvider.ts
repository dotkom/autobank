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

export type OnlineProfile = {
  account_id: string;
  name: string;
  email: string;
  picture: string;
};

export type OnlineSession = Session & {};

export default function OnlineProvider<
  P extends Record<string, any> = OnlineProfile
>(options: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'onlineweb4',
    name: 'Onlineweb4',
    type: 'oauth',
    version: '2.0',
    authorization: {
      params: {
        scope: 'openid profile authentication:admin',
        grant_type: 'authorization_code',
        url: `${OW4_ADDRESS}/sso/authorize/?response_type=code`,
      },
    },
    accessTokenUrl: `${OW4_ADDRESS}/sso/token/`,
    requestTokenUrl: `${OW4_ADDRESS}/sso/authorize/`,
    profileUrl: `${OW4_ADDRESS}/sso/userinfo/`,
    profile: (profile) => {
      return {
        ...profile,
        id: profile.sub,
        image: profile.picture,
        email: profile.email,
      };
    },
    idToken: false,
    options,
  };
}
