import { AuthUrls } from './UserUrls';

export const getAccessToken: () => string | null = () => localStorage.getItem('accessToken');

export const setAccessToken: (accessToken: string | null) => void = (accessToken: string | null) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getExpirationTime: () => string | null = () => localStorage.getItem('expirationTime');

export const setExpirationTime: (expirationTime: string) => void = (expirationTime: string) => {
  localStorage.setItem('expirationTime', expirationTime);
};

export const clearToken: () => void = () => {
  setAccessToken(null);
};

export const logout = () => {
  if (localStorage) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expirationTime');
  }

  if (document?.cookie) {
    document.cookie = 'onlydfans-cookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
};

export const tokenExpired: () => boolean = () => {
  const expirationTime: string | null = getExpirationTime();
  if (!expirationTime) return true;
  //@ts-ignore
  return Date.now() > parseInt(expirationTime ?? 0, 10);
};

export const isTokenValidOrUndefined: () => boolean = () => {
  const logged = getExpirationTime() === null && getAccessToken() === null;
  const shouldRefresh = getExpirationTime() !== null && getAccessToken() === null;
  if (logged) return true;
  if (shouldRefresh) return false;
  return !tokenExpired();
};

export const isConnected = () => {
  return getExpirationTime() !== null && getAccessToken() !== null;
};

export const handleRefreshError: (err: Error) => void = () => {
  clearToken();
};

export const checkUrlIsInWhitelist = (url: string): boolean => {
  let result = false;

  let newUrl = url;

  // Remove last slash to be sure to have same url
  if (newUrl.slice(-1) === '/' && newUrl !== '/') {
    newUrl = newUrl.substr(0, newUrl.length - 1);
  }

  [newUrl] = newUrl.split('?');

  for (let index = 0; index < AuthUrls.whitelist.length; index += 1) {
    const urlConfig = AuthUrls.whitelist[index];

    if (urlConfig.endsWith('*')) {
      if (newUrl.startsWith(urlConfig.replace('*', ''))) {
        result = true;
        break;
      }
    }

    // Same Url without URL parameters and Same Methods
    if (newUrl === urlConfig) {
      result = true;
      break;
    }

    // Check if parameters in configUrl
    if (urlConfig.indexOf('/:') !== -1) {
      const splitUrl = newUrl.split('/');
      const splitConfigUrl = urlConfig.split('/');

      if (splitUrl.length === splitConfigUrl.length) {
        let similar = true;
        for (let j = 0; j < splitUrl.length; j += 1) {
          if (splitConfigUrl[j].indexOf(':') === -1 && splitUrl[j] !== splitConfigUrl[j]) {
            similar = false;
          }
        }

        // If Everything is similar (with parameters and method)
        if (similar) {
          result = true;
          break;
        }
      }
    }
  }

  return result;
};

export const createRedirectUrl = () => {
  if (typeof location === 'undefined') {
    return '';
  }
  return encodeURIComponent(location?.pathname + location?.search);
};
