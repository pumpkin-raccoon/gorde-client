/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { META_DATA } from 'constants/meta'
import Script from 'next/script'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <div>
      <Script 
        src="https://d3js.org/d3.v6.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive"
      />
      <Script id="kakao-sdk">
        {`Kakao.init('17657aadc9aca8d918a2302c05e213ca');`}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CDD735D7M9"/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CDD735D7M9');
        `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>{META_DATA.title}</title>
        <meta name="description" property="og:description" content={META_DATA.description} key="description" />
        <meta property="og:image" content="/images/og-image.png" key="image" />
        <meta property="og:title" content={META_DATA.title} key="title" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}

export default MyApp
