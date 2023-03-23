import 'modern-normalize/modern-normalize.css';

import '../styles/globals.css';

import Head from 'next/head';

import { trpc } from '../trpc';

import type { NextComponentType, NextPage } from 'next';
import type { AppContext, AppProps as NextAppProps, AppInitialProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

export type PageComponent<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps = NextAppProps & {
  Component: PageComponent;
};

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default trpc.withTRPC(App);
