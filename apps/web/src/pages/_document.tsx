import { Html, Head, Main, NextScript } from 'next/document';

import type { NextComponentType } from 'next';
import type { DocumentContext, DocumentInitialProps, DocumentProps } from 'next/document';

const Document: NextComponentType<DocumentContext, DocumentInitialProps, DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
