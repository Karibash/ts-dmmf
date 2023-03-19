import '../styles/globals.css';

import { trpc } from '../trpc';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

const App: FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
