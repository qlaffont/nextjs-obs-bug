import '../scss/app.scss';

import { isDevelopmentEnv } from 'env-vars-validator';
import { Router } from 'next/dist/client/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSsr } from 'usehooks-ts';

import { AppLayout } from '../components/layout/AppLayout';
import I18n from '../services/i18n/I18nProvider';
import SEO from '../services/seo/next-seo.config';
import UserContextProvider from '../services/store/UserProvider';
import { SlideAlertTransition } from '../services/useAlert';

// Create a client

const MyApp = (props: { Component: any; pageProps: any }) => {
  const { Component, pageProps } = props;

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  const { isBrowser } = useSsr();
  useEffect(() => {
    if (isBrowser) {
      if (
        !sessionStorage.getItem('_swa') &&
        document.referrer.indexOf(location.protocol + '//' + location.host) !== 0
      ) {
        fetch(
          'https://counter.dev/track?' +
            new URLSearchParams({
              referrer: document.referrer,
              screen: screen.width + 'x' + screen.height,
              user: 'qlaffont',
              utcoffset: '1',
            }),
        );
      }
      sessionStorage.setItem('_swa', '1');
    }
  }, [isBrowser]);

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

const EnhanceMyApp = (props: any) => {
  return (
    <>
      <I18n>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          limit={5}
          toastClassName={'!text-white bg-dark-100 bg-opacity-90'}
          transition={SlideAlertTransition}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <DefaultSeo {...SEO} />
        <UserContextProvider>
          <MyApp {...props} />
        </UserContextProvider>
      </I18n>
    </>
  );
};

export default EnhanceMyApp;
