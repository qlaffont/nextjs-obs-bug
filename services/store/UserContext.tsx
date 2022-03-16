import { NextRouter } from 'next/router';
import { createContext, Dispatch } from 'react';

import {
  checkUrlIsInWhitelist,
  createRedirectUrl,
  getAccessToken,
  isConnected,
  setAccessToken,
  setExpirationTime,
  tokenExpired,
} from './UserTools';
import { AuthUrls } from './UserUrls';

export interface UserContextInterface {
  profile: {
    profile?: any;
    setProfile: Dispatch<any> | any;
  };
  loading: {
    isLoading: boolean;
    setIsLoading: Dispatch<boolean>;
  };
  navbar: {
    isAuthBlockDisplay: boolean;
    setIsAuthBlockDisplay: Dispatch<boolean>;
  };
}

export const UserContext = createContext<UserContextInterface | null>(null);

export const syncUserContext = async (router: NextRouter, fetchProfileHook, data?: any) => {
  let loadProfile = getAccessToken() && !tokenExpired();

  if ((!getAccessToken() || tokenExpired()) && !data) {
    // Try to refresh or redirect to signin
    try {
      //const { access_token: accessToken, expiration: expirationTime } = await RestAPIService.refresh();
      //setAccessToken(accessToken);
      //setExpirationTime(expirationTime);
      loadProfile = true;
    } catch (error) {
      if (!checkUrlIsInWhitelist(router.route)) {
        router.push(`${AuthUrls.logout}?redirectURL=${createRedirectUrl()}`);
      }
      return;
    }
  }

  if (data) {
    const { access_token: accessToken, expiration: expirationTime } = data;

    setAccessToken(accessToken);
    setExpirationTime(expirationTime);

    loadProfile = true;
  }

  if (loadProfile) {
    await fetchProfileHook();
  }
};

export const authMiddleware = (url: string, router: NextRouter) => {
  if (!checkUrlIsInWhitelist(url)) {
    if (!isConnected() && router.pathname !== '/_error') {
      router.push(AuthUrls.login + `?redirectURL=${url}`);
    }
  }
};
