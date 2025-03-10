import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './global.css';
import { Montserrat } from 'next/font/google'
import Script from 'next/script';
import Head from 'next/head';
 
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

 
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return (
    <>
      <Head>
        <title>Daftar NIDI SLO SUMUT - NIDI - PLN</title>

        {/* Adding custom favicon */}
        <link rel="icon" href="/PLN-icon.png" />

        {/* Adding additional information about website */}
        <meta name="description"
            content="NIDI SLO PLN SUMUT" />
        <meta name="keywords"
            content="NIDI, SLO, NIDI SLO, Daftar NIDI SLO, Daftar NIDI SLO Sumut, Sumut" />
        <meta name="author"
            content="Rehagana Sembiring" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="https://kit.fontawesome.com/3efa7fb350.js" crossOrigin="anonymous"></Script>
      <main className={montserrat.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  )
}