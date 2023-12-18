import { Head, Html, Main, NextScript } from 'next/document'
import { useState } from 'react'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="TUNA Book - Tủ sách đáng quý, tunabook, tusachbinhyen, tusachgiauco"
        />
        <meta name="google-adsense-account" content="ca-pub-4554403796307363" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
